class Parent {
  hey() {
    console.log('Hey')
  }
}

class Child extends Parent {
  constructor(name) {
    super();

    this.name = name;
  }

  hi = () => {
    console.log(`hi${this.name}`)

  }
}

const instance = new Child('instance');
instance.hey();
instance.hi();

const hi = instance.hi
hi();
