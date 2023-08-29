
// var  checkArray = [1, 2, 3];
// // console.log( checkArray && checkArray.length ? true : false)

// console.log(checkArray?.length ? true : false)

         //Or


// var  checkArray = {}

// let check =  Array.isArray(checkArray) && checkArray.length
//  console.log(check)

     

function m(arr){
    let empty = {};
    if( Array.isArray(empty) && empty.length){
        return false;
    }else{ return true}
}
var o = m({});
console.log("6. Bolean value of an empty object :", o)

