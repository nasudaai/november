import { key } from './lib.cjs';
console.log(key);

//process
console.log(process.argv);

const arg = process.argv[2];
console.log(`import file is: ${arg}`);
