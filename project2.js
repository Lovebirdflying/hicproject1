/*
2. Create a function that accepts an array of objects representing employees and returns the average salary of all the employees.
   Sample input: [
     { name: 'John', salary: 50000 },
     { name: 'Alice', salary: 60000 },
     { name: 'Bob', salary: 70000 }
   ]
   Expected output: 60000

*/
  function average(arr){
    var {total, count} = arr.reduce((a,b) =>{
        if (salary = b.salary ){
            a.total += salary;
            a.count++
        }
        return a;
    }, {total:0, count: 0});

    return total/count
  }

  var Avg = average([
    { name: 'John', salary: 50000 },
    { name: 'Alice', salary: 60000 },
    { name: 'Bob', salary: 70000 }
  ])

  console.log("2. Average Employee Salary:", Avg);
