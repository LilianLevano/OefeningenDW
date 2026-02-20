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


      let bestaandeStudent = alleStudenten.find(s => s.naam === studentInput.value)

    if(bestaandeStudent){
        // student bestaat al, gewoon vak toevoegen
        bestaandeStudent.vak.push({vakNaam: vakInput.value, score: Number(scoreInput.value)})
        bestaandeStudent.alleScores.push(Number(scoreInput.value))
    } else {
        // nieuwe student aanmaken
        let student = { 
            naam: studentInput.value, 
            vak: [] ,
            alleScores: []
        }

        student.vak.push({
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
   

    ul.innerHTML = ""
    divStudentOverview.style.whiteSpace = "pre-wrap"
    ul.style.listStyle = "none"

    for(let student of alleStudenten){

        let naamStudentTekst = ""
        let overview = "";

        let hoogteScoreStudent = Math.max(...student.alleScores)
        let laagsteScoreStudent = Math.min(...student.alleScores)


        let som = 0;
        for(let score of student.alleScores){
            som+= score
        }

        let gemiddelde = som / student.alleScores.length

        for(let i = 0; i <  student.vak.length; i++){
            naamStudentTekst = `Naam van de student: ${student.naam}` 
            overview += `
            Vak: ${student.vak[i].vakNaam}
                Score op die vak: ${student.vak[i].score}
            `
        }

        overview += `
        Hoogste score van deze student: ${hoogteScoreStudent}
        Laagste score van deze student: ${laagsteScoreStudent}
        Gemiddelde score van deze student: ${gemiddelde}
        `
    
        let li = document.createElement('li')
        let p = document.createElement('p')
        p.textContent = naamStudentTekst + overview
      

        ul.appendChild(li).appendChild(p)
}

































}






















