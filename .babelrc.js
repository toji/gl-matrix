module.exports = {
  "presets": ["@babel/preset-env"],
  "env": {
    "esm": {
      "presets": [["@babel/preset-env", { "modules": false }]],
    }
  }
};
