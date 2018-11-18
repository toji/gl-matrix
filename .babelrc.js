module.exports = {
  "presets": ["@babel/env"],
  "env": {
    "esm": {
      "presets": [["@babel/env", { "modules": false }]]
    }
  }
};
