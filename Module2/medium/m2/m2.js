"use strict";
let alleStudenten = []

let studentInput = document.getElementById('student')
let vakInput = document.getElementById('course')
let scoreInput = document.getElementById('grade')
let buttonScoreToevoegen = document.getElementById('addGrade')
let divStudentOverview = document.getElementById('studentOverview')
 let ul = document.createElement('ul')

    divStudentOverview.appendChild(ul)

buttonScoreToevoegen.addEventListener('click', function(){

      let bestaandeStudent = alleStudenten.find(student => student.naam === studentInput.value) // functie om te checken of iets bestaat in een array
        // vgl met een for eacht gaan we een student variabel tijdelijk maken om deze te "loopen"

    if(bestaandeStudent){
        // student bestaat al, gewoon nodige informatie toevoegen
        bestaandeStudent.vak.push({vakNaam: vakInput.value, score: Number(scoreInput.value)})
        bestaandeStudent.alleScores.push(Number(scoreInput.value))
    } else {
        // nieuwe student aanmaken met nodige informatie
        let student = { 
            naam: studentInput.value, 
            vak: [] ,   // makkelijker om dit zo te initaliseren en dan ervan een object te maken
            alleScores: []  // allescore worden apart gehouden om makkelijke berekeningen te maken
        }

        student.vak.push({      // hier gaan we de vak object pushen
            vakNaam: vakInput.value,
             score: Number(scoreInput.value),

            })

        student.alleScores.push(Number(scoreInput.value))

        alleStudenten.push(student)
    }

    render()

vakInput.value =""
scoreInput.value =""
})

function render(){
   
    ul.innerHTML = ""               // elke keer we deze functie gebruiken gaat de hele ul leeg gemaakt worden en gerefreshed om makkelijk dingen toe te voegen
    divStudentOverview.style.whiteSpace = "pre-wrap"        // de style van de white space naar pre-wrap om de template dingen goed af te printen
    ul.style.listStyle = "none"

    for(let student of alleStudenten){

        let naamStudentTekst = `Naam van de student: ${student.naam}` 
        let overview = "";

        let hoogteScoreStudent = Math.max(...student.alleScores)
        let laagsteScoreStudent = Math.min(...student.alleScores)

        let som = 0;
        for(let score of student.alleScores){
            som+= score
        }

        let gemiddelde = som / student.alleScores.length
      
        for(let i = 0; i <  student.vak.length; i++){           // loop door alle vakken van de student          
            overview += `                                       
            Vak: ${student.vak[i].vakNaam}
                Score op die vak: ${student.vak[i].score}
            `
            // elke object vak (naam + score) wordt in 1 stuk toegevoegd, en voor elke vak wordt het dus toegevoegd
        }

        overview += `
        Hoogste score van deze student: ${hoogteScoreStudent}
        Laagste score van deze student: ${laagsteScoreStudent}
        Gemiddelde score van deze student: ${gemiddelde}
        `

        // na de loop worden de rest van de info toegevoegd --> niet in de loop anders dubbel
    
        let li = document.createElement('li')
        let p = document.createElement('p')
        p.textContent = naamStudentTekst + overview
      

        ul.appendChild(li).appendChild(p)
}

































}






















