
// var  checkArray = [1, 2, 3];
// // console.log( checkArray && checkArray.length ? true : false)

// console.log(checkArray?.length ? true : false)

         //Or


// var  checkArray = {}

// let check =  Array.isArray(checkArray) && checkArray.length
//  console.log(check)

function isEmptyObject(obj) {

    return Object.keys(obj).length === 0;

}

 

const sampleInput = {};

const isEmpty = isEmptyObject(sampleInput);

 

console.log(isEmpty); // This will output: true

/*

function m(arr){
    let empty = {};
    if( Array.isArray(arr) && arr.length){
        return false;
    }else{ return true}
}
var o = m({});
console.log("6. Bolean value of an empty object :", o)

*/