/*
1. Write a function that takes an array of numbers as input and returns a new array with only the numbers greater than 5.
   Sample input: [2, 7, 10, 4, 8]
   Expected output: [7, 10, 8]

*/


function greaterThan5 (a, b){
    return a.filter(index => {

        return index > b
    } )
}

var show = greaterThan5([2, 7, 10, 4, 8], 5)

console.log("1. Array of numbers great than 5:", show)
