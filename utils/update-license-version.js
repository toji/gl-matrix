import fs from 'fs';
import template from './license-template.js';

const { version } = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));

fs.writeFileSync(new URL('../LICENSE.md', import.meta.url), template, 'utf8');
fs.writeFileSync(new URL('../VERSION', import.meta.url), version, 'utf8');
