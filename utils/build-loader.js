const fs = require('fs');
const path = require('path');

const inputDir = 'assembly';
const outputDir = 'loader';

let declarations = new Set();

let content;

fs.readdirSync(inputDir)
  .filter(file => 
    file.includes('.ts') &&
    !file.includes('import') &&
    !file.includes('index') &&
    !file.includes('math') &&
    !file.includes('d.ts') &&
    !file.includes('_tests_'))
  .forEach(file => {
    const fileName = file.split('.')[0];
    let moduleName = fileName;
    if (file.includes('common')) {
      moduleName = 'glMatrix';
    }
    content = `import { ${moduleName} } from './index.js'\n\nexport const {\n`;
    console.log(`Searching for exported functions and objects in file ${path.join(inputDir, file)}...`);
    fs.readFileSync(path.join(inputDir, file)).toString().split('\n').forEach(line => {
      if (line.match(/export.+(function|var).[a-zA-Z]+.+[;\{]/g) !== null) {
        declarations.add(line.replace(/export.+(function|var).([a-zA-Z]+).+[;\{\r]/g, "$2"));
      }
    });

    declarations.forEach((value, value2, set) => {
      if (value != 'min' && value != 'max') {
        content += `  ${value},\n`;
      }
    });
    content += `\} = ${moduleName};\n`;

    console.log(`Found ${declarations.size ?? 0} exports.`);

    loader = fs.writeFileSync(path.join(outputDir, fileName + '.js'), content);
    console.log(`Exports are being written to file ${path.join(outputDir, fileName + '.js')}\n`);
  });
