class MyClass {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  method() {
    return this.name + ' is ' + this.job; 
  }
}

const ume = new MyClass('ume', 'yaoya');
console.log(ume.method());
