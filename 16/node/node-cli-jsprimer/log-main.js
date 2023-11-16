import { program } from 'commander';
import * as fs from 'node:fs/promises';
import { key } from './lib.cjs';

fs.readFile('sample.md').then((file) => {
  console.log(file);
}).catch((err) => {
  console.error(err);
})

console.log(key);
console.log('Hello world');
console.log(process.argv);

program.parse(process.argv);

const filePath = program.args[0];
console.log(filePath);
