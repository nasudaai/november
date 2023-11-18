class ArrayWrapper {
  
  constructor(array = []) {
    this.array = array;
  }

  static of(...items) {
    return new ArrayWrapper(items);
  }

  get length() {
    return this.array.length;
  }
}

const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
console.log(arrayWrapperA);
console.log(arrayWrapperA.array);

const arrayB = ArrayWrapper.of(1, 2, 3);
console.log(arrayB)
console.log(arrayB.array);

console.log(arrayWrapperA.length);
console.log(arrayB.length);
