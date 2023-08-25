
function duplicate(arr){
    return new Set(arr).size !== arr.length;
}

var get = duplicate([1, 2, 3, 2, 4])
console.log("9. Boolean value of a duplicate iten in an array:",get)