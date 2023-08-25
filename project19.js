function ReturnPositive(arr){ 
    let look = arr.filter ((a) => a > 0)

    return look
}

var thepositive = ReturnPositive([-2, 3, -4, 7, -1])

console.log("19. Positive number in an array :", thepositive)