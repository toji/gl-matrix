// This script file generates implementation and test code for every vector
// swizzle variants, since there's a lot of them and making small tweaks to
// evenry one by hand any time you want to change things is a pain.

import * as fs from 'fs';

const VEC_COMPONENT_COUNTS = [2, 3, 4];
const VEC_COMPONENTS = ['x', 'y', 'z', 'w'];
const SRC_PATH = './src';
const TEST_PATH = './tests'

const AUTOGEN_REGEX = /\[Swizzle Autogen\](.+?)\[\/Swizzle Autogen\]/s

function getComponentVariants(size, components) {
  if (size == 0) {
    return {'': []};
  }

  const thisLevel = {};
  const prevLevel = getComponentVariants(size - 1, components);
  for (let i = 0; i < components.length; ++i) {
    const component = components[i];
    for (const [prevComponent, indices] of Object.entries(prevLevel)) {
      thisLevel[`${component}${prevComponent}`] = [i, ...indices];
    }
  }

  return thisLevel;
}

function updateFileAutogen(path, content) {
  // Write out the typescript implementation to the src file
  console.log(`Writing to ${path}`);
  const srcFile = fs.readFileSync(path, 'utf8');
  let autogenSrc = `[Swizzle Autogen]\n\n${content}\n  // [/Swizzle Autogen]`;
  const updatedSrc = srcFile.replace(AUTOGEN_REGEX, autogenSrc);
  fs.writeFileSync(path, updatedSrc);
}

for (const vecSize of VEC_COMPONENT_COUNTS) {
  const vecType = `Vec${vecSize}`;

  // Generate all swizzle variants for this vector type.
  let swizzles = {};
  const components = VEC_COMPONENTS.slice(0, vecSize);
  for (const count of VEC_COMPONENT_COUNTS) {
    swizzles = { ...swizzles, ...getComponentVariants(count, components) };
  }

  // Generate typescript implementation for every swizzle
  let implementationSrc = '';
  for (const [name, indices] of Object.entries(swizzles)) {
    const outType = `Vec${indices.length}`;
    const args = indices.map((index) => `this[${index}]`).join(', ');
    implementationSrc += `  /** @group Swizzle */ get ${name}(): ${outType} { return new ${outType}(${args}); }\n`;
  }

  updateFileAutogen(`${SRC_PATH}/vec${vecSize}.ts`, implementationSrc);

  let testSrc = '';
  for (const [name, indices] of Object.entries(swizzles)) {
    const outType = `Vec${indices.length}`;
    const argNames = name.split('').join(', ');
    const args = indices.map((index) => `v[${index}]`).join(', ');
    testSrc += `
  describe("${vecType}().${name}", () => {
    it("should return ${outType}(${argNames})", () => {
      expect(v.${name}).toBeVec(${args});
    });
    it("should be return a copy", () => {
      let sw = v.${name};
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    `;
  }

  updateFileAutogen(`${TEST_PATH}/vec${vecSize}-swizzle.spec.ts`, testSrc);
}
