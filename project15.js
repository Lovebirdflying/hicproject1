function unique(arr){
    let NewSet = arr.length === new Set(arr).size

    return NewSet
    }


    var U = unique([1, 2, 3, 4, 5])
    console.log("15. Unique Bolean value of an array:",U)