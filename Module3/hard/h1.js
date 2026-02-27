let allePlayers = []

let buttonNieuweSpeler = document.getElementById('maakNieuweSpeler')
let buttonSchadeDoenOpSpeler = document.getElementById('doeSchadeBijSpeler')
let buttonLevelSpelerOp = document.getElementById('levelSpelerOp')
let divSpelerStat = document.getElementById('playerStats')

let naamSpelerInput = document.getElementById('playerName')


let ul = document.createElement('ul')
divSpelerStat.appendChild(ul)
divSpelerStat.style.whiteSpace = "pre-wrap"

buttonNieuweSpeler.addEventListener("click", () =>{

    let bestaandeSpeler = allePlayers.find(player => player.naam === naamSpelerInput.value)


    if(!bestaandeSpeler){
        let nieuweSpeler = maakNieuweSpeler(naamSpelerInput.value.trim())
            allePlayers.push(nieuweSpeler) 
            console.log(allePlayers);
            naamSpelerInput.value = "";
            refreshPlayerStat()
    }else{
        return
    }

    
})

buttonSchadeDoenOpSpeler.addEventListener("click", () =>{
    let gekozeSpeler = allePlayers.find(player => player.naam === naamSpelerInput.value)
    doeSchadeAanSpeler(gekozeSpeler)
    refreshPlayerStat()
})

buttonLevelSpelerOp.addEventListener("click", ()=>{
    let gekozeSpeler = allePlayers.find(player => player.naam === naamSpelerInput.value)
    levelSpelerUp(gekozeSpeler)
    refreshPlayerStat()
})


const levelSpelerUp = gekozeSpeler =>{
    gekozeSpeler.level++
    gekozeSpeler.health = 100
}

const doeSchadeAanSpeler = gekozeSpeler =>{
     if((gekozeSpeler.health - 25) < 0 ){
        return
    }else{
        gekozeSpeler.health -= 25
    }
    console.log(gekozeSpeler);
}


const maakNieuweSpeler = naam =>{
    naam = naam || "Player 1"

    return{
        naam: naam,
        level: 1,
        health: 100,
    }

}

const refreshPlayerStat = () =>{

    ul.innerHTML = "";

    for(let player of allePlayers){
        let li = document.createElement('li')

        let stats = `Player name: ${player.naam}
            Player level: ${player.level}
            Player health: ${player.health} `

            li.textContent = stats
            ul.appendChild(li)
    }


}

