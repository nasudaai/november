class Member {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
//  function call() {
 //   console.log(`${this.name} is ${this.job}.`)
  //}
}

const ume = new Member('ume', 'zutuki');
//ume.call();
console.log(`${ume.name}, ${ume.job}`)


