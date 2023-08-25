
function decende(arr){
    let sorted =  arr.reverse((a,b) => b - a)
    
    return sorted;
   
}

var input = decende(['apple', 'banana', 'cherry', 'date'])
console.log("4.Strings in reverse alphabetical order:",input)