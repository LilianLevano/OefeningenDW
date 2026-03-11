'use strict';

const button = document.getElementById("clickButton");
const counterDiv = document.querySelector(".counter");
const messageDiv = document.querySelector(".message");

let counter = 0;

function waitOpKlik(){
    return new Promise(resolve =>{      // we maken een nieuwe promise, reject hoeven we niet te handelen omdat niets fout kan lopen
        button.addEventListener('click', function(){
            resolve();          // eens de button gekikt wordt, roepen we resolve aan om de promise geldig te maken
        })
    })
}

async function startCounter(){
    while(counter < 5){         // terwijl counter kleiner dan 5 is
        await waitOpKlik();     // gaan we eerst de loop blokeren totdat er geklikt wordt
        counter ++
        counterDiv.textContent = counter;
    }

    messageDiv.textContent = "Bravo"
}

startCounter();