import { readFileSync } from 'fs';
import { compile } from '@tailwindcss/node';
const css = readFileSync('src/styles/global.css', 'utf8');
const result = await compile(css, { from: 'src/styles/global.css', base: process.cwd() });
console.log(result.code.includes('bg-timber-wolf') ? 'HAS' : 'NO');
console.log(result.code.indexOf('bg-timber-wolf'));
console.log(result.code.includes('--font-sans:') ? 'FONT' : 'NOFONT');
