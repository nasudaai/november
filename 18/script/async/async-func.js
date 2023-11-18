async function doAsync() {
  return {a: 1, b: 2} ;
}

const promise = doAsync();
console.log(promise);

doAsync().then(value => {
  console.log(value.a);
  console.log(value.b);
  console.log(value);
  const valVar = value;
  console.log(valVar);
})

function fAsync(val) {
  return Promise.resolve(val);
}

const obj = {1: 'value', 2: 'value2'}
fAsync(obj).then(val => {
  console.log(val);
})
