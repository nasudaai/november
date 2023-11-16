import { key } from './lib.cjs';
console.log(key);

//process

console.log(process.argv);

const processArgInit = process.argv.length - 1;
console.log(processArgInit);

const arg = process.argv[processArgInit];
console.log(`import file is: ${arg}`);
