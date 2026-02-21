'use strict';



let cursisTitelInput = document.getElementById('courseTitle')
let cursusBeschrijvingInput = document.getElementById('courseDesc')
let buttonCursusToevoegen = document.getElementById('addCourse')
let alleCursussen = []


let studentNaamInput = document.getElementById('studentName')
let buttonStudentToevoegen = document.getElementById('enrollStudent')
let selectCursusPicker = document.getElementById('coursePicker')
let alleStudenten = []

let scoreToevoegenInput = document.getElementById('moduleGrade')
let buttonScoreToevoegen = document.getElementById('addGrade')
let selectStudentPicker = document.getElementById('studentPicker')
let selectCursusPickerVoorStudent = document.getElementById('modulePicker')

let selectRapportStudent = document.getElementById('reportStudent')
let buttonGenereerRapport = document.getElementById('generateReport')
let divReportOutput = document.getElementById('reportOutput')

buttonCursusToevoegen.addEventListener('click', function(){

    let bestaandeCursus = alleCursussen.find(cursus => cursus.titel === cursisTitelInput.value)

    if(bestaandeCursus){
        alert('Deze cursus bestaat al')
    }else{

        let cursus = {
            titel: cursisTitelInput.value,
            beschrijving: cursusBeschrijvingInput.value,
        }

        alleCursussen.push(cursus)

    }

    cursisTitelInput.value = ""
    cursusBeschrijvingInput.value = ""
    updateCursusOpties()
    updateModuleOpties()
    resetInput()
    updateStudentRapporten()
})

selectStudentPicker.addEventListener('click', function(){
    updateModuleOpties()
})

buttonStudentToevoegen.addEventListener('click', function(){

    let bestaandeStudent = alleStudenten.find(student => student.naam === studentNaamInput.value)
    let gekozenCursus = alleCursussen.find(cursus => cursus.titel === selectCursusPicker.value)

    // als de student niet bestaat maken we die
    if(!bestaandeStudent){
        let student = {
            naam: studentNaamInput.value,
            cursussen: [],
        }
        alleStudenten.push(student)
        bestaandeStudent = student 
    }

    let heeftAlCursus = bestaandeStudent.cursussen.find(c => c.cursus === gekozenCursus.titel)

    if(heeftAlCursus){
        alert('Deze student heeft dit vak al!')
    } else {
        bestaandeStudent.cursussen.push({ cursus: gekozenCursus.titel, beschrijving: gekozenCursus.beschrijving, score: null })
       
    }

    studentNaamInput.value = ""
    updateStudentOpties()
     resetInput()
     updateStudentRapporten()
})

buttonScoreToevoegen.addEventListener('click', function(){

    let scoreToeTeVoegen = Number(scoreToevoegenInput.value) 

    let student = alleStudenten.find(student => student.naam === selectStudentPicker.value)
    let cursusVanStudent = student.cursussen.find(cursus => cursus.cursus === selectCursusPickerVoorStudent.value)

    cursusVanStudent.score = scoreToeTeVoegen
    scoreToevoegenInput.value = ""

    console.log(student);
     resetInput()
     updateStudentRapporten()
})

buttonGenereerRapport.addEventListener('click', function(){
   

    divReportOutput.innerHTML = "";
    let gekozeStudent = alleStudenten.find(student => student.naam === selectRapportStudent.value)

    let overview = `
    Naam student: ${gekozeStudent.naam}
    `

    for(let i = 0; i < gekozeStudent.cursussen.length; i++){
        overview += `
            Cursus van de student: ${gekozeStudent.cursussen[i].cursus}
                Beschrijving van die cursus: ${gekozeStudent.cursussen[i].beschrijving}
                    Punt op die cursus: ${gekozeStudent.cursussen[i].score}
        `
    }

    let p = document.createElement('p')
    p.textContent = overview
    
    divReportOutput.style.whiteSpace = "pre-wrap"
    divReportOutput.appendChild(p)

})


function updateCursusOpties(){

    selectCursusPicker.innerHTML = ""
    

    for(let cursus of alleCursussen){
        let option = document.createElement('option')
        option.id = cursus.titel
        option.textContent = cursus.titel
        
        selectCursusPicker.appendChild(option)
        
    }

    


}

function updateModuleOpties(){

    selectCursusPickerVoorStudent.innerHTML = ""

    let student = alleStudenten.find(student => student.naam === selectStudentPicker.value)

     if(!student) return

    for(let i = 0; i < student.cursussen.length; i++){

        let option = document.createElement('option')
        option.id = student.cursussen[i].cursus;
        option.textContent = student.cursussen[i].cursus;

        selectCursusPickerVoorStudent.appendChild(option)
    }


}



function updateStudentOpties(){

    selectStudentPicker.innerHTML = ""

    for(let student of alleStudenten){
        let option = document.createElement('option')
        option.id = student.naam
        option.textContent = student.naam
        
        selectStudentPicker.appendChild(option)
    }

    selectStudentPicker.value = ""


}

function updateStudentRapporten(){
    selectRapportStudent.innerHTML = ""

    for(let student of alleStudenten){
        let optie = document.createElement('option')
        optie.textContent = student.naam

        selectRapportStudent.appendChild(optie)
    }

}


function resetInput(){

    selectCursusPicker.value = "";
    selectStudentPicker.value = "";
    selectCursusPickerVoorStudent.value = "";

}
