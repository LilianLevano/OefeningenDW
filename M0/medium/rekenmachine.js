
'use strict';

let input1 = document.getElementById('getal1')

let input2 = document.getElementById('getal2')



let knop = document.getElementById('bereken')

knop.addEventListener('click', optellen)



function optellen(){

   

 


    let getal1 = parseInt(input1.value) // parse le value du input, un string, en int
    let getal2 = parseInt(input2.value)


 
   



    let resultaat = document.getElementById('resultaat')
    let som = getal1 + getal2

    resultaat.innerText = som
    console.log("Erin")

}





