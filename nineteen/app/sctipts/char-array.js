//put each character into an array

function convertStrToArray(string) {
    const str = string; 
    const arrayContainingCharacters = [];
    for (const s of str) {
        arrayContainingCharacters.push(s)
    }
    return arrayContainingCharacters;
}


const arrStr = convertStrToArray('string')


console.log(arrStr)
