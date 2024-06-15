// This script file generates implementation and test code for every vector
// swizzle variants, since there's a lot of them and making small tweaks to
// every one by hand any time you want to change things is a pain.

import * as fs from 'fs';

const VEC_COMPONENT_COUNTS = [2, 3, 4];
const VEC_COMPONENTS = ['x', 'y', 'z', 'w'];
const COLOR_COMPONENTS = ['r', 'g', 'b', 'a'];
const SRC_PATH = './src/swizzle/index.ts';
const SRC_PATH_F64 = './src/swizzle/f64/index.ts';
const TEST_PATH = './tests/f32';
const TYPES_PATH = './src/types/swizzle/index.ts';
const TYPES_PATH_F64 = './src/types/swizzle/f64/index.ts';

const AUTOGEN_REGEX = /\[Swizzle Autogen](.+?)\[\/Swizzle Autogen]/s

function getComponentVariants(size, components) {
  if (size === 0) {
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

const prevSeenSwizzles = new Set();
const uniqueSwizzlesByComponentCount = {};

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

  uniqueSwizzlesByComponentCount[vecSize] = Object.keys(swizzles).filter((key) => !prevSeenSwizzles.has(key));
  uniqueSwizzlesByComponentCount[vecSize].forEach((key) => { prevSeenSwizzles.add(key); });

  // Update swizzle tests.

  let testSrc = '';
  for (const [name, indices] of Object.entries(swizzles)) {
    const outType = `Vec${indices.length}`;
    const argNames = name.split('').join(', ');
    const args = indices.map((index) => `v[${index}]`).join(', ');
    testSrc += `
  describe('${vecType}().${name}', () => {
    it('should return ${outType}(${argNames})', () => expect(v.${name}).toBeVec(${args}));
    it('should be return a copy', () => {
      let sw = v.${name};
      sw[0] += 1;
      expect(v[0]).not.toEqual(sw[0]);
    });
  });
    `;
  }

  updateFileAutogen(`${TEST_PATH}/Vec${vecSize}-swizzle.spec.ts`, testSrc);
}

// Update `src/swizzle/index.ts` and `src/swizzle/f64/index.ts`. -----------------------------------------------------

const swizzleArrays = `
  const VEC2_SWIZZLES = ['${uniqueSwizzlesByComponentCount[2].join("','")}'];
  const VEC3_SWIZZLES = ['${uniqueSwizzlesByComponentCount[3].join("','")}'];
  const VEC4_SWIZZLES = ['${uniqueSwizzlesByComponentCount[4].join("','")}'];
`;

updateFileAutogen(SRC_PATH, swizzleArrays);
updateFileAutogen(SRC_PATH_F64, swizzleArrays);

// Update `src/types/swizzle/index.ts` and `src/types/swizzle/f64/index.ts`. -----------------------------------------

const swizzleTypeAlias = {
  2: 'Vec2Alias',
  3: 'Vec3Alias',
  4: 'Vec4Alias'
}

const accessorDocs = (length) => {
  return `    /**
     * @category Swizzle API   
     * @returns New instance of swizzled Vec${length}
     */`;
};

let swizzleTypes = `
  /**
   * Vec2 swizzle extension accessors.
   */
  interface Vec2 {
`;

uniqueSwizzlesByComponentCount[2].forEach((key) => swizzleTypes += `${accessorDocs(key.length)}
    get ${key}(): ${swizzleTypeAlias[key.length]};\n`)

swizzleTypes += `  }\n`;

swizzleTypes += `
  /**
   * Vec3 swizzle extension accessors.
   */
  interface Vec3 {
`;

uniqueSwizzlesByComponentCount[2].forEach((key) => swizzleTypes += `${accessorDocs(key.length)}
    get ${key}(): ${swizzleTypeAlias[key.length]};\n`)

uniqueSwizzlesByComponentCount[3].forEach((key) => swizzleTypes += `${accessorDocs(key.length)}
    get ${key}(): ${swizzleTypeAlias[key.length]};\n`)

swizzleTypes += `  }\n`;

swizzleTypes += `
  /**
   * Vec4 swizzle extension accessors.
   */
  interface Vec4 {
`;

uniqueSwizzlesByComponentCount[2].forEach((key) => swizzleTypes += `${accessorDocs(key.length)}
    get ${key}(): ${swizzleTypeAlias[key.length]};\n`)

uniqueSwizzlesByComponentCount[3].forEach((key) => swizzleTypes += `${accessorDocs(key.length)}
    get ${key}(): ${swizzleTypeAlias[key.length]};\n`)

uniqueSwizzlesByComponentCount[4].forEach((key) => swizzleTypes += `${accessorDocs(key.length)}
    get ${key}(): ${swizzleTypeAlias[key.length]};\n`)

swizzleTypes += `  }\n`;

updateFileAutogen(TYPES_PATH, swizzleTypes);
updateFileAutogen(TYPES_PATH_F64, swizzleTypes);
