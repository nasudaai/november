function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


//
let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore);

numberStore = [...numberStore, newNumber];
console.log(numberStore);

//
const str = 'string'
const strArr = [...str]
console.log(strArr)

//obj
let obj1 = { name: 'saru', x: 36}
let obj2 = { job: 'eat', y: 78}

let mergeObj = { ...obj1, ...obj2}
console.log(mergeObj)

let arrObj = [ {...obj1}, {...obj2}]
console.log(arrObj)
