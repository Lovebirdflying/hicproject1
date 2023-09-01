
function certainyear(arr){ 
  var output = [];
  
  for( var i = 0; i < arr.length; i++){
    if(arr[i].year === 2010) {
      output.push(arr[i].title);
  
      
    }
  }
 
return output;

}

var Dyear = certainyear([
    { title: 'Book 1', year: 2010 },
    { title: 'Book 2', year: 2015 },
    { title: 'Book 3', year: 2010 }
  ])


console.log("5. Books published in a certain year :", Dyear);


/*
function certainyear(arr, target){ 
  var output = [];
  
  for( var i = 0; i < arr.length; i++){
    if(arr[i].year === target) {
      output.push(arr[i].title);
  
      
    }
  }
 
return output;

}

var Dyear = certainyear([
    { title: 'Book 1', year: 2010 },
    { title: 'Book 2', year: 2015 },
    { title: 'Book 3', year: 2010 }
  ], 2010)


console.log("5. Books published in a certain year :", Dyear);

*/