import { program } from 'commander';
import { key } from './lib.cjs';

console.log(key);
console.log('Hello world');
console.log(process.argv);

program.parse(process.argv);

const filePath = program.args[0];
console.log(filePath);
