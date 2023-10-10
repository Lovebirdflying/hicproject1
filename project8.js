

function g(arr){
  return arr.reduce((element, value)=>{
      if(element.gpa < value.gpa){
         element= value
      }
      return element
  })}

    
    var Y = g([
        { name: 'John', gpa: 3.5 },
        { name: 'Alice', gpa: 4.0 },
        { name: 'Bob', gpa: 3.8 }
      ]
    )
    
    console.log("8. unable to the show full Highest GPA index:", Y)
    

