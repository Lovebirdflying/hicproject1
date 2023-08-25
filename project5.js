
function average(arr){ 
    var theCertain =  arr.filter(p => p.year === 2010)


return theCertain}

var Uncomplete = average([
    { title: 'Book 1', year: 2010 },
    { title: 'Book 2', year: 2015 },
    { title: 'Book 3', year: 2010 }
  ]);

console.log("5. This is incompete unable to show full index:", Uncomplete);