
function factorial(n){
    let fact = 1;
    if (n == 0 || n == 1){
        return fact;
    }else
    if(n > 1){
        for( var i = n; i >= 1; i--){
            fact = fact * i;
        }
        return fact;
    }
    
}

now = factorial(5)
console.log("12. Factorial given number of 5:", now)