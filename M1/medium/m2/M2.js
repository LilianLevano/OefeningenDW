
let alleBlok = document.getElementsByClassName('blok')

let countRed = 0
let countBlue = 0
let countGreen = 0


let tekstRed = document.getElementById('redCount')
let tekstBlue = document.getElementById('blueCount')
let tekstGreen = document.getElementById('greenCount')



for(let blok of alleBlok){
   
      blok.addEventListener('pointerover', function(){
        resetColor(blok)
        blok.classList.add('red')
        countRed++
        updateCount();
        
        
    })
   
       blok.addEventListener('click', function(){
        resetColor(blok)
        blok.classList.add('blue')
        countBlue++
        updateCount();
    })

         blok.addEventListener('dblclick', function(){
        resetColor(blok)
        blok.classList.add('green')
        countGreen++
        updateCount();
    })

}

function updateCount(){
    tekstRed.textContent = countRed;
    tekstGreen.textContent = countGreen;
    tekstBlue.textContent = countBlue;
}





function resetColor(cell) {
  if (cell.classList.contains("red")){
    cell.classList.remove('red')
    countRed--;
    updateCount();
  }

  if (cell.classList.contains("green")){
    cell.classList.remove('green')
    countGreen--;
    updateCount();
  }

  if (cell.classList.contains("blue")){
    cell.classList.remove('blue')
    countBlue--; 
    updateCount();
  }

  if (cell.classList.contains("blok")){
    cell.classList.remove('blok')
    
  }
 
}



    

