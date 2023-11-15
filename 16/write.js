const fs = require('fs');

const content = 'content!\n';

fs.writeFile('./test.txt', content, { flag: 'a+'}, (err) => {
  if(err) {
    console.error(err);
  }
  console.log(`write: ${content}`)
});
