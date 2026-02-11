
let themaKnop = document.getElementById('themaKnop')

themaKnop.addEventListener('click', veranderThema)
let body = document.querySelector('body')
let tekst = document.getElementsByClassName('text')
let link = document.getElementById('link')

function veranderThema(){
    
 
    if(themaKnop.textContent === "Donker thema"){
        
        body.style.background = "black"

        for(let text of tekst){
        text.style.color = "white"
        }

        
        link.style.color = "red"
        themaKnop.textContent = "Licht thema"


    }else if(themaKnop.textContent === "Licht thema"){

         body.style.background = "white"

        for(let text of tekst){
        text.style.color = "black"
        }
        link.style.color = "blue"
        themaKnop.textContent = "Donker thema"

    }
    
  


}