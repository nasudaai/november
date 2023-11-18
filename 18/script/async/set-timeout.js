function taskA() {
  return Date.now();
}

function taskB() {
  return Date.now();
}

function taskAsync() {
  return Date.now();
}

const dateA = taskA();
console.log(dateA);

setTimeout(() => {
  const dateAsync = taskAsync();
  console.log(dateAsync);
}, 1000);

console.log(taskB());
