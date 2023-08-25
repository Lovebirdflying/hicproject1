
function ProductWithHighestPrice(arr){
    return arr.reduce((n, element)=>{
        if(!n.price || n && n.price < element.price){
            n = element
        }
        return n
    })}

var highest = ProductWithHighestPrice( [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 15 },
    { name: 'Product 3', price: 12 }
  ]
)
console.log("14.The Product with highest price is :",highest)