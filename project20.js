
function Thecity(arr){ 

    const theUnique = arr.filter(value => value.city === 'New York'
    );
   
return theUnique
    }


var Uniquecity = Thecity([
    { name: 'John', city: 'New York' },
    { name: 'Alice', city: 'Los Angeles' },
    { name: 'Bob', city: 'New York' }

]);

console.log("20. New array with only the customers from a specific city.:", Uniquecity);