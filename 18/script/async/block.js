function taskA() {
  console.log('taskA' + Date.now());
}

function taskB() {
  console.log('taskB' + Date.now());
}

function taskAsync() {
  console.log('taskAsync' + Date.now());
}


function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}


const startTime = Date.now();
taskA();

setTimeout(() => {
  const endTime = Date.now();
  taskAsync();
  console.log(`endTime - startTime >> ${endTime - startTime}`)
}, 1000);

blockTime(1000);
taskB();
