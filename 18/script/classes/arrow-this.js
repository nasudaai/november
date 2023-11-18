class Counter {
  count = 0;

  up = () => {
    this.increment()
  }
  increment() {
    this.count++;
  }
}

const counter = new Counter();
const up = counter.up;
up();
console.log(counter.count);

const increment = counter.increment;
//increment();
