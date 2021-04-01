module.exports = {
  "presets": ["@babel/preset-typescript"],
  "env": {
    "esm": {
      "presets": [["@babel/preset-typescript", { "modules": false }]],
    }
  }
};
