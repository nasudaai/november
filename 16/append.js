const fs = require('fs');

const content = 'append content\n';

fs.appendFile('./test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  console.log(`append: ${content}`);
})
