
function CAP(arr){

    let capitalized = arr.map((a)=>{
    return a[0].toUpperCase() + a.slice(1)})

    return capitalized
}

var upper = CAP(['apple', 'banana', 'cherry'])
console.log("10. Upper Case of each element in the array is:",upper)