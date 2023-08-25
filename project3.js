/*
3. Implement a function that checks if an array is sorted in ascending order and returns a boolean value accordingly.
   Sample input: [1, 2, 4, 7, 9]
   Expected output: true
*/

function bolean(arr){ for(let i = 0; i < arr.length; i++)

    if( arr[i] < arr[i - 1]){
        return false
    }
    else
    if(arr[i] > arr[i -1]){
        return true
    }

}

var num = bolean([1, 2, 4, 7, 9])

console.log("3. boolean value of array sorted in ascending order:",{num})
