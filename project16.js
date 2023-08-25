function CountTheStrings(arr){

    let totalstring = arr.reduce((a, b) => a + b.length, 0)

    return totalstring

}

var NumOfString= CountTheStrings(['apple', 'banana', 'cherry']);
console.log(NumOfString)