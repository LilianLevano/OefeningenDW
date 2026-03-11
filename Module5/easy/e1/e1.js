'use strict';

function changeColor(kleur, callback){
    document.body.style.backgroundColor = kleur
    setTimeout(() =>{
        callback();
    }, 1000)
}

document.getElementById('startButton').addEventListener('click', () =>{
    changeColor("red", function(){
        changeColor("green", function(){
            changeColor("blue", function(){
                console.log('ok');
                
            })
        })
    })
})