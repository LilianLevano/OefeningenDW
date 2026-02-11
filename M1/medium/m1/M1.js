let allSpecial = document.getElementsByClassName('special')
let aantalSpecial = 0;

for(let special of allSpecial){
    special.style.color = "red"
    aantalSpecial++
}

let alleParagrafen = document.querySelectorAll('p')
let tweedeParagraaf = alleParagrafen[1]


tweedeParagraaf.style.textDecoration = "underline"


let output = document.getElementById('output')

output.textContent = "Aantal special: " + aantalSpecial