const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const copyFileSync = (source, dest) => {
  const content = fs.readFileSync(source, 'utf-8');
  fs.writeFileSync(dest, content);
};

delete pkg.private;
delete pkg.scripts;
delete pkg.devDependencies;
pkg.main = 'cjs/index.js'
pkg.module = 'esm/index.js'
pkg.types = 'types/index.d.ts'
fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));

copyFileSync('README.md', 'dist/README.md');
copyFileSync('LICENSE.md', 'dist/LICENSE.md');
