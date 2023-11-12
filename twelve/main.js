const { testLog } = require('./func.js')
const funcs = require('./funcs.js')

let i = 0;

while (i < 10) {
  console.log(i);
  i = i + 1;
}

testLog()
funcs.test()
