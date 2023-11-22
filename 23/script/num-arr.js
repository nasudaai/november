function createNumArr(n, len) {
  const numArr = []

  //create data
  let i = n;
  const length = len;
  while( i <= length ) {
    numArr.push(i)
    
    i = i + 1;
  }
  
  return numArr;
}

const data = createNumArr(1, 100)
console.log(data)
