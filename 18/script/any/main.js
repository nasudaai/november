const set = new Set();
set.add('a')

console.log(set.size);

set.add(['value', 'value2'])
console.log(set.size)
const results = []
set.forEach((value) => {
  results.push(value)
})
console.log(results)

const setArr = new Set([1, 2])
console.log(setArr.size);
