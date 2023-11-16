import { program } from 'commander';
import * as fs from 'node:fs/promises';
import { marked } from 'marked';

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, { encoding: 'utf-8' }).then((file) => {
  
  const html = marked.parse(file);
  console.log(file);
  console.log(html);
}).catch((err) => {
  console.log('Please enter the name of the file')
  console.error(err.message);
  process.exit(1);
});
