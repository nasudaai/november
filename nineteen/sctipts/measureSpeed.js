function measureSpeed(upperLimit) {

    let count = 0;
    let oneTime =0;
    const startTime = Date.now()
    console.log(`start time ${startTime}`)

    while (true) {
        const time = Date.now()
        const deffTime = time - startTime
        count = count + 1

        oneTime = deffTime - oneTime;


        console.log(`${count}time: ${oneTime}ms  deff: ${deffTime}ms`)

        //"oneTime = deffTime <- I want to think about this later..."
        oneTime = deffTime;

        if (deffTime >= upperLimit) {
            const exit = Date.now();
            const diff = startTime - exit;
            return console.log(`exit: ${exit} diff: ${diff}`);
        }
    }
}

measureSpeed(1000)

/*
const start = Date.now()
console.log(start)

setTimeout(() => measureSpeed(2000),1000);

const end = Date.now();
*/
