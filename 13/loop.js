function sum (...args) {
  let total = 0;
  for (const arg of args) {
    total = total + arg;
    console.log(total)
  }
  return total
}

let total = sum(1, 3, 4)
console.log(total)

total = sum(18, 3, 2, 47, 5)
console.log(total)
