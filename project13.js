
function LowHigh(arr){
    return arr.reduce( function (n, m){
        return{
            low: Math.min(n.low, m),
            high: Math.max(n.high, m)
        };

    }, {low: arr[0], high:arr[0]});
}

var man = LowHigh([2, 7, 4, 9, 1])
console.log("13. Lowest and highest number in the array:",man)