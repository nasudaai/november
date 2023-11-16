const fs = require('fs/promises')

async function write() {
  try {
    const content = 'content!\n';
    await fs.writeFile('./test.txt', content);
  } catch (err) {
    console.log(err);
  }
}

write();
