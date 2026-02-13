
'use strict';

let knop = document.getElementById('hallo');

knop.addEventListener('click', veranderButton)

function veranderButton() {

    knop.innerText = 'Tot ziens!';
    console.log("Ik ben er in");
    
}



