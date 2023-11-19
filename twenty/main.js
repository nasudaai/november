console.log('main')

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++){ 
    total = total + numbers[i];
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));

numbers.forEach(currentValue => {
  console.log(currentValue);
})

let total = 0;
numbers.forEach(num => {
  total = total + num
})

console.log(`total: ${total}`)
