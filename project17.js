function SortDuration(a){
    
    let sort = a.sort((b, c) => 
    b.duration - c.duration
    );
    
    return sort
}

var answer = SortDuration( [
    { title: 'Song 1', duration: 180 },
    { title: 'Song 2', duration: 240 },
    { title: 'Song 3', duration: 200 }
  ]
)

console.log(answer)