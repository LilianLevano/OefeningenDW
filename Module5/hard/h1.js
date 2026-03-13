let blocks = document.querySelectorAll('.block')
let startButton = document.getElementById('startBtn')

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// deze functie return "resolve" na een bepaalde tijd, wat zal zorgen dat onze await kan fulfilled worden

async function verlichtBlok(block, ms){

    let origineleKleur = block.style.backgroundColor;

    block.style.backgroundColor = "white"

    await wait(ms)

    block.style.backgroundColor = origineleKleur;

}
// deze functie houdt de eerste kleur, zet het op white, wacht op een tijd die we zullen geven in de volgende functie, dan zet eerste kleur terug

async function startLichtShow(){

    for(let block of blocks){
        await verlichtBlok(block, 400)
    }

    await wait(500);

      // rechts → links
    for(let i = blocks.length - 1; i >= 0; i--){
        await verlichtBlok(blocks[i], 400);
    }

}

startButton.addEventListener('click', startLichtShow)