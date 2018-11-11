const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

delete pkg.private;
fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));
fs.copyFileSync('README.md', 'dist/README.md');
fs.copyFileSync('LICENSE.md', 'dist/LICENSE.md');

const files = fs.readdirSync('src')
  .filter(file => !file.includes('common') && !file.includes('index'))
  .forEach(file => {
    const name = file.endsWith('.js') ? file.slice(0, -3) : file;
    const filePkg = {
      name: `gl-matrix/${name}`,
      main: `../cjs/${file}`,
      module: `../esm/${file}`,
    };
    fs.mkdirSync(`dist/${name}`);
    fs.writeFileSync(
      `dist/${name}/package.json`,
      JSON.stringify(filePkg, null, 2)
    );
  });
