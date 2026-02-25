

const maakBestelling = (drank = "cola", snack = "chips", datum = new Date()) => {
    return{
        drank: drank,
        snack: snack,
        datum: `${datum.getDate()} / ${datum.getMonth() + 1} / ${datum.getFullYear()} om ${datum.getHours()} uur, ${datum.getMinutes()} minuten en ${datum.getSeconds()} seconden`
    }
}

const output = document.getElementById('output')
output.style.whiteSpace = "pre-wrap"
let bestelling1 = maakBestelling();
let bestelling2 = maakBestelling("fanta");
let bestelling3 = maakBestelling("sprite", "nootjes");


output.innerHTML += `Bestelling 1: drank: ${bestelling1.drank}, snack: ${bestelling1.snack}, datum: ${bestelling1.datum} 
`
output.innerHTML += `Bestelling 2: drank: ${bestelling2.drank}, snack: ${bestelling2.snack}, datum: ${bestelling2.datum} 
`
output.innerHTML += `Bestelling 3: drank: ${bestelling3.drank}, snack: ${bestelling3.snack}, datum: ${bestelling3.datum}
 `
