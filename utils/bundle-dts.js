const fs = require("fs");
const path = require("path");

let sourcePath = "./dist/index.d.ts";
let typings = fs.readFileSync(sourcePath, "utf-8");
let typingsLength = typings.length;

typings = typings.replace(/declare module "index" {([^]+?)\n}/, "");
if (typingsLength == typings.length)
  throw new Error(
    "An index module should have been generated and then replaced"
  );

typings = typings.replace(
  'declare module "common" {',
  "export module glMatrix {"
);
typings = typings.replace(/declare module "([^"]+?)" {/g, "export module $1 {");
typings = 'declare module "gl-matrix" {\n' + typings + "\n}";
fs.writeFileSync(sourcePath, typings, "utf-8");
