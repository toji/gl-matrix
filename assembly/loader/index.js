import { AsBind } from "as-bind";
import path from "path"
import fs from "fs";

/**
 * @module Wasm
 */

export var response = { value: undefined, reference: undefined };
export default response;

const wasmFile = path.resolve(__dirname + "/build/untouched.wasm");
const imports = [
];

/**
 * Instantiate and compile WebAssembly module
 * @returns {Promise<Object>} wasm module
 */
async function module() {
  return await AsBind.instantiate(fs.readFileSync(wasmFile), imports);
}

/**
 * Instantiate WebAssembly and return exports
 * @returns {Promise<Object>} wasm exports
 */
async function exports() {
  const wasmModule = await AsBind.instantiate(fs.readFileSync(wasmFile), imports);
  return wasmModule.unboundExports;
}

/**
 * Call function from WebAssembly instance
 * @param {String} moduleName name of the module called
 * @param {String} functionName name of the function called
 * @param {any[]} args arguments
 */
export async function call(moduleName, functionName, ...args) {
  const wasmModule = await AsBind.instantiate(fs.readFileSync(wasmFile), imports);
  response.value = wasmModule.unboundExports[moduleName][functionName](args);
  if (typeof response.value === 'number') {
    response.reference = response.value
    response.value = wasmModule.unboundExports.__getArray(response.value) ?? response.value;
  }
  return response;
}

/**
 * Bind function from WebAssembly instance
 * @param {String} moduleName name of the module called
 * @param {String} functionName name of the function called
 * @param {Symbol} args arguments
 * @returns {Promise<Function>} function binding
 */
export function bind(moduleName, functionName) {
  return call.bind(null, moduleName, functionName);
}
