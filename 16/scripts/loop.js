function loop() {
    for (let i = 0; i < 10; i = i + 1) {
        console.log(i)
    }
}

function strChangeArr() {
    let str = 'string';
    let i = 0;
    let arr = [];
    while (i < str.length ) {
        arr.push(str[i])
            console.log(arr[i]);
        console.log(arr);

        i = i + 1;
    }
}


exports.loop = loop;
exports.strChangeArr = strChangeArr;
