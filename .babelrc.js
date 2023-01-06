module.exports = {
  "presets": ["@babel/env"],
  "env": {
    "cjs": {
      "plugins": [["add-import-extension", {extension: 'cjs', replace: true}]]
    },
    "esm": {
      "presets": [["@babel/env", { "modules": false }]]
    }
  }
};
