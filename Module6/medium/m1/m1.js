let alleKnoppen = document.querySelectorAll('.endpoint-knop')


for(let knop of alleKnoppen){
    knop.addEventListener('click', () =>{
      let status = knop.getAttribute('data-code')
      console.log(status);

      fetch(`https://httpstat.us/${status}`)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        
      })
      
    })
}