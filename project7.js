function p(arr){

    let multi = arr.reduce((a, b)=> a* b)
    return multi;
}

var L = p([2, 3, 4])
console.log("7. Product of all nume :", L)