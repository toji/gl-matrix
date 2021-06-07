import fs from 'fs';

const pkgStr = fs.readFileSync(new URL('../package.json', import.meta.url), 'utf-8');
const pkg = JSON.parse(pkgStr.replace(/\.\/dist\//g, './'));

const copyFileSync = (source, dest) => {
  const content = fs.readFileSync(source, 'utf-8');
  fs.writeFileSync(dest, content);
};

delete pkg.private;
delete pkg.scripts;
delete pkg.devDependencies;
fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));

copyFileSync('README.md', 'dist/README.md');
copyFileSync('LICENSE.md', 'dist/LICENSE.md');
