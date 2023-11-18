class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count = this.count + 1;
  }
}

const counter = new Counter();
const counterA = new Counter();

counter.increment();
console.log(`counter count: ${counter.count}`);

counterA.increment();
console.log(`counterA count:  ${counterA.count}` );

const methodBool = counter.increment === counterA.increment;
console.log(methodBool)
