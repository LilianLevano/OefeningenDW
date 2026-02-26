let playerNameInput = document.getElementById('playerName')
let scoreInput = document.getElementById('score')
let buttonScoreToevoegen = document.getElementById('voegScoreToe')
let divScoreBoard = document.getElementById('scoreBoard')
divScoreBoard.style.whiteSpace = "pre-wrap"

const verwerkScore = (name = "Onbekend", score = 0) => {
    score = score ?? "Geen geldige score"
    name = name ?? "Onbekend"

    return{
        name: name,
        score: score
    }

}


buttonScoreToevoegen.addEventListener("click", () =>{
    let nieuweScore = verwerkScore(playerNameInput.value, Number(scoreInput.value))

    divScoreBoard.innerHTML += `Naam van de speler: ${nieuweScore.name}, score van de speler ${nieuweScore.score}\n`
})