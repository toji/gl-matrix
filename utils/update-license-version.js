const fs = require('fs');
const path = require('path');

const version = require(path.join(process.cwd(), 'package.json')).version;
const template = require('./license-template');

fs.writeFile(path.join(process.cwd(), 'LICENSE.md'), template, 'utf8', function() {});
fs.writeFile(path.join(process.cwd(), 'VERSION'), version, 'utf8', function() {});
