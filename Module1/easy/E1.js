
'use strict';

alert('Welkom op deze Quiz!')
let naam = prompt('Wat is jouw naam?')
let goedeAntwoord = 0;

let vraag1 = prompt('Welkom ' + naam + '. \nAntwoord op de drie volgende vragen om een grote prijs te krijgen!\nWat is de volledige naam van "JS"')
let antwoord1 = "JavaScript"

if(vraag1 === antwoord1){
    alert('Goed antwoord! +1!!')
    goedeAntwoord++
}else{
    alert('Foutieve antwoord. Het antwoord is: ' + antwoord1 )
}




let vraag2 = prompt('Voor wat wordt HTML en CSS gebruikt ? Backend of Frontend?')
let antwoord2 = "Frontend"

if(vraag2 === antwoord2){
    alert('Goed antwoord! +1')
    goedeAntwoord++
}else{
    alert('Foutieve antwoord. Het antwoord is: ' + antwoord2)
}




let vraag3 = prompt('Met wat eindigt bijna elke lijn in Java?')
let antwoord3 = ";"

if(vraag3 ===antwoord3){
    alert('Goed antwoord!')
    goedeAntwoord++
}else{
    alert('Foutieve antwoord. Het antwoord is: ' + antwoord3 )
}


if(goedeAntwoord >= 2){
    alert('Je hebt: ' + goedeAntwoord + ' goede antwoorden, goed gedaan!')
}else{
    alert('Je hebt: ' + goedeAntwoord + ' goede antwoorden, niet goed gedaan!')
}