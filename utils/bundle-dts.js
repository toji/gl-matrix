import fs from "fs";

let sourcePath = "./dist/index.d.ts";
let sourceTypingsPath = "./src/types.d.ts";
let sourceTypings = fs.readFileSync(sourceTypingsPath, "utf-8");
let typings = fs.readFileSync(sourcePath, "utf-8");
let typingsLength = typings.length;

// Honestly, this is just a horrible hack.

// Remove index module at the end
typings = typings.replace(/declare module "index" {([^]+?)\n}/, "");
if (typingsLength == typings.length)
  throw new Error(
    "An index module should have been generated and then replaced"
  );

// Rename common module to glMatrix
typings = typings.replace(
  'declare module "common" {',
  "export module glMatrix {"
);

// Replace imports from other modules with direct references
typings = typings.replace(/import\("([^"]+?)(\.js)?"\)/g, "$1");

// Replace imports with nothing
typings = typings.replace(/ *import.+from.*;/g, "");

// Replace declare module with exports
typings = typings.replace(/declare module "([^"]+?)" {/g, "export module $1 {");

// Add types
typings = "\n" + sourceTypings.replace(/declare/g, "export") + "\n" + typings;

// Wrap them in a "gl-matrix module"
typings = 'declare module "gl-matrix" {\n' + typings + "\n}";

fs.writeFileSync(sourcePath, typings, "utf-8");
