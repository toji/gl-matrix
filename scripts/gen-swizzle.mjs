// This script file generates implementation and test code for every vector
// swizzle variants, since there's a lot of them and making small tweaks to
// evenry one by hand any time you want to change things is a pain.

import * as fs from 'fs';

const VEC_COMPONENT_COUNTS = [2, 3, 4];
const VEC_COMPONENTS = ['x', 'y', 'z', 'w'];
const COLOR_COMPONENTS = ['r', 'g', 'b', 'a'];
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
  let autogenSrc = `[Swizzle Autogen]\n${content}\n  // [/Swizzle Autogen]`;
  const updatedSrc = srcFile.replace(AUTOGEN_REGEX, autogenSrc);
  fs.writeFileSync(path, updatedSrc);
}

function getSwizzleImpl(name, indices) {
  const outType = `Vec${indices.length}`;
  const args = indices.map((index) => `this[${index}]`).join(', ');
  return `get ${name}(): ${outType} { return new ${outType}(${args}); }`;
}

for (const vecSize of VEC_COMPONENT_COUNTS) {
  const vecType = `Vec${vecSize}`;

  // Generate all swizzle variants for this vector type.
  let swizzles = {};
  const components = VEC_COMPONENTS.slice(0, vecSize);
  for (const count of VEC_COMPONENT_COUNTS) {
    swizzles = { ...swizzles, ...getComponentVariants(count, components) };
  }

  const colorComponents = COLOR_COMPONENTS.slice(0, vecSize);
  for (const count of VEC_COMPONENT_COUNTS) {
    swizzles = { ...swizzles, ...getComponentVariants(count, colorComponents) };
  }

  const primarySwizzle = components.join('');
  const primaryIndices = swizzles[primarySwizzle];

  const lastComponent = components[components.length-1];
  const lastColorComponent = colorComponents[colorComponents.length-1];
  const lastIndex = primaryIndices[primaryIndices.length-1];

  // Generate typescript implementation for every swizzle
  let implementationSrc = `
  /**
   * Swizzle operations are performed by using the \`.\` operator in conjunction with any combination
   * of between two to four component names, either from the set \`${components.join('')}\` or \`${colorComponents.join('')}\` (though not intermixed).
   * They return a new vector with the same number of components as specified in the swizzle attribute.
   *
   * @group Swizzle Accessors
   *
   * @example
   * \`\`\`js
   * let v = new ${vecType}(${primaryIndices.join(', ')});
   *
   * v.yx // returns new Vec2(1, 0);
   * v.x${lastComponent}y // returns new Vec3(0, ${lastIndex}, 1);
   * v.${lastComponent}yx${lastComponent} // returns new Vec4(${lastIndex}, 1, 0, ${lastIndex});
   *
   * v.${colorComponents.join('')} // returns new ${vecType}(${primaryIndices.join(', ')});
   * v.r${lastColorComponent}g // returns new Vec3(0, ${lastIndex}, 1);
   * v.gg // returns new Vec2(1, 1);
   * \`\`\`
   */
  ${getSwizzleImpl(primarySwizzle, swizzles[primarySwizzle])}\n\n`;

  for (const [name, indices] of Object.entries(swizzles)) {
    if (name === primarySwizzle) { continue; }
    implementationSrc += `  /** @hidden */ ${getSwizzleImpl(name, indices)}\n`;
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
