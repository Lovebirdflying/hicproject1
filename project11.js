


  function specificM(arr){

   const gen = arr.filter(( value) => value.genre === 'Action'
   );
    
return gen

  }

  var specfic = specificM([
    { title: 'Movie 1', genre: 'Action' },
    { title: 'Movie 2', genre: 'Comedy' },
    { title: 'Movie 3', genre: 'Action' }
  ])

  
console.log(specfic)
