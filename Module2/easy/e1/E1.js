'use strict';

let nieuweScoreInput = document.getElementById('score')
let alleScores = []
let buttonToevoegen = document.getElementById('addScore')
let buttonReset = document.getElementById('reset')
let gemiddeldeScoreTekst = document.getElementById('average')
let hoogsteScoreTekst = document.getElementById('highest')
let scoreLijst = document.getElementById('scoreList')
let som = 0;
let gemiddelde = 0;

buttonToevoegen.addEventListener('click', function(){
    alleScores.push(Number(nieuweScoreInput.value))
    let nieuweScoreNumber = Number(nieuweScoreInput.value)

    som += nieuweScoreNumber

    let li = document.createElement('li')
    li.textContent = nieuweScoreNumber

    scoreLijst.appendChild(li)

    console.log(alleScores)

    buttonReset.addEventListener('click', function(){
        alleScores = []
        som = 0;
        gemiddelde = 0;
        gemiddeldeScoreTekst.textContent = gemiddelde
        hoogsteScoreTekst.textContent = 0

        let alleLi = document.querySelectorAll('li')

        for(li of alleLi){
            li.remove()
        }

    })
   
  
    gemiddelde = som / alleScores.length
    gemiddeldeScoreTekst.textContent = gemiddelde
    hoogsteScoreTekst.textContent = Math.max(...alleScores)
    nieuweScoreInput.value = null;

    


})












