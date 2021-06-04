const fs = require("fs");
const path = require("path");

let sourceDir = './dist/types'
let typesSource = fs.readFileSync("./src/types.d.ts", "utf-8");
let typesResult = typesSource.replace(/declare/g, "export");
let typesExports = [];
for (const [,exportName] of typesResult.matchAll(/\bexport\s+\w+\s+(\w+)\b/g)) {
  typesExports.push(exportName);
}

for (let sourceFile of fs.readdirSync(sourceDir)) {
  let sourcePath = path.join(sourceDir, sourceFile);
  let typings = fs.readFileSync(sourcePath, "utf-8");
  if (sourceFile.includes('index') === false) {
    typings = `import { ${typesExports.join(', ')} } from './types';\n` + typings;
  }
  fs.writeFileSync(sourcePath, typings, "utf-8");
}

// write after to prevent reading above
fs.writeFileSync(path.join(sourceDir, 'types.d.ts'), typesResult);
