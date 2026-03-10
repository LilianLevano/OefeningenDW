'use strict';

class Persoon{
    constructor(naam, email, leeftijd){
        this.naam = naam;
        this.email = email;
        this._leeftijd = 0;
        this.leeftijd = leeftijd;
    }

    set leeftijd(leeftijd){

       if(leeftijd >= 18 && leeftijd <= 100){
            this._leeftijd = leeftijd;
        }

    }
}

class Student extends Persoon{

    static studentenTeller = 1;
    static studenten = [];

    constructor(naam, email, leeftijd, studiejaar){
        super(naam, email,leeftijd)
        this.studentnummer = Student.generateStudentenNummer();
        this._studiejaar = null;
        this.studiejaar = studiejaar;
        this.ingeschrevenCursussen = []
        Student.studenten.push(this)
    }

    voegCursusAanStudent(cursus){
        this.ingeschrevenCursussen.push(cursus)
    }

    static generateStudentenNummer(){
        return Student.studentenTeller++
    }

    static zoekOpStudentenNummer(nummer){
        return this.studenten.find(student => student.studentnummer === nummer)
    }

     static toonAlleStudenten(div){

        div.innerHTML = "";
        let ul = document.createElement('ul')
        div.appendChild(ul)

        for(let student of Student.studenten){
            let li = document.createElement('li')
            let overzicht = `Naam van de student: ${student.naam}
            Email van de student: ${student.email}
            Leeftijd van de student: ${student._leeftijd}
            Studentennummer van de student: ${student.studentnummer}
            Studiejaar van de student: ${student._studiejaar}`
            
            if(student.ingeschrevenCursussen.length === 0){
                overzicht += '\n\tStudent heeft momenteel geen cursussen.'
            }else{

                overzicht+= "\n\tCursussen van deze student:"

                for(let cursus of student.ingeschrevenCursussen){
                        overzicht += `
                        -Titel cursus: ${cursus.titel}
                        \t-Beschrijving cursus: ${cursus.beschrijving}`
                    }
            }

            


            li.textContent = overzicht;
            ul.appendChild(li)
        }
    }

    set studiejaar(studiejaar){
         if(studiejaar >= 1 && studiejaar <= 8){
            this._studiejaar = studiejaar;
        }
    }
}

class Docent extends Persoon{

    static docenten = [];

    constructor(naam, email, leeftijd, vakgebied, aanstellingsdatum){
        super(naam, email,leeftijd)
        this.vakgebied = vakgebied
        this.aanstellingsdatum = aanstellingsdatum;
        this.cursussenVanDocent = [];
        Docent.docenten.push(this)
    }

    voegCursusAanDocent(cursus){
        this.cursussenVanDocent.push(cursus)
    }

     static toonAlleDocenten(div){

        div.innerHTML = "";
        let ul = document.createElement('ul')
        div.appendChild(ul)

        for(let docent of Docent.docenten){
            let li = document.createElement('li')
            let overzicht = `Naam van de docent: ${docent.naam}
            Email van de docent: ${docent.email}
            Leeftijd van de docent: ${docent._leeftijd}
            Vakgebied van de docent: ${docent.vakgebied}
            Aanstellingsdatum van de docent: ${docent.aanstellingsdatum}
            Cursussen van de docent:`

            for(let cursus of docent.cursussenVanDocent){
                overzicht += `
                -Titel cursus: ${cursus.titel}
                \t-Beschrijving cursus: ${cursus.beschrijving}`
            }

            li.textContent = overzicht;
            ul.appendChild(li)
        }
    }

}

class Cursurs{

    static cursussen = [];

    constructor(titel, beschrijving, docent, ects, maximumStudenten){
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.docent = docent;
        this.ects = ects;
        this._maximumStudenten = null;
        this.maximumStudenten = maximumStudenten;
        Cursurs.cursussen.push(this)

        
            docent.voegCursusAanDocent(this)
        
        
        
        

    }

    static zoekCursusOpTitel(titel){
       return Cursurs.cursussen.find(cursus => cursus.titel === titel)
    }

    static toonAlleCursussen(div){

        div.innerHTML = "";
        let ul = document.createElement('ul')
        div.appendChild(ul)

        for(let cursus of Cursurs.cursussen){
            let li = document.createElement('li')
            let overzicht = `Titel van de cursus: ${cursus.titel}
            Beschrijving van de cursus: ${cursus.beschrijving}
            Docent van de cursus: ${cursus.docent.naam}
            Extras van de cursus: ${cursus.ects}
            Max aantal studenten voor deze cursus: ${cursus._maximumStudenten}`

            li.textContent = overzicht;
            ul.appendChild(li)
        }
    }

    set maximumStudenten(maximumStudenten){
        if(maximumStudenten > 10){
            this._maximumStudenten = maximumStudenten
        }
    }
}

class Inschrijvingen{

    static inschrijvingen = [];

    constructor(student, cursus){
        this.student = student
        this.cursus = cursus
        this.datum = new Date()
        this.status = "actief"
        this.beoordeling = null;

        student.voegCursusAanStudent(cursus)
        Inschrijvingen.inschrijvingen.push(this)
    }


    static toonAlleInschrijvingen(div){
        div.innerHTML = "";
            let ul = document.createElement('ul')
            div.appendChild(ul)

            for(let inschriving of Inschrijvingen.inschrijvingen){
                let li = document.createElement('li')
                let overzicht = `${inschriving.student.naam} werd voor deze cursus: ${inschriving.cursus.titel} ingeschreven op: ${inschriving.datum}.
                De inschrijving is momenteel: ${inschriving.status}.
                De inschrijving heeft als beoordeling: ${inschriving.beoordeling}`

                li.textContent = overzicht;
                ul.appendChild(li)
            }
    }

    voltooi(){
        this.status = "voltooid"
    }

    annuleer(){
        this.status = "geannuleerd"
    }

    voegBeoordelingToe(score){
        this.beoordeling = score
    }

}

let student1 = new Student("Lilian", "lilian@gmail.com", 19, 5)
let student2 = new Student("Siebe", "siebe@gmail.com", 18, 2)


let docent1 = new Docent("David", "david@gmail.com", 50, "ICT", "01/01/1990")
let docent2 = new Docent("Jeffrey", "jeffrey@gmail", 35, "Psycho", "15/10/2010")

let cursus1 = new Cursurs("PROG", "JS leren, Java, Frontend/Backend", docent1, "Extratje", 80)
let cursus2 = new Cursurs("SOP", "Mensen brein leren te kennen", docent2, "Andere extra", 90)



console.log(docent1);
console.log(docent2);

let inschrijving1 = new Inschrijvingen(student1, cursus1)
let inschrijving2 = new Inschrijvingen(student1, cursus2)
inschrijving2.voltooi();
inschrijving2.voegBeoordelingToe(90)




let divCursusLijst = document.getElementById('course-list')
divCursusLijst.style.whiteSpace = 'pre-wrap'


 let divStudentLijst = document.getElementById('student-list')
divStudentLijst.style.whiteSpace = 'pre-wrap'


 let divDocentenLijst = document.getElementById('teacher-list')
divDocentenLijst.style.whiteSpace = 'pre-wrap'


let divInschrijvingenLijst = document.getElementById('enrollment-list')
divInschrijvingenLijst.style.whiteSpace = 'pre-wrap'

let tabCursussen = document.querySelector('[data-tab="courses"]')
let tabStudents = document.querySelector('[data-tab="students"]')
let tabTeachers = document.querySelector('[data-tab="teachers"]')
let tabEnrollments = document.querySelector('[data-tab="enrollments"]')

let divCursus = document.getElementById('courses')
let divStudent = document.getElementById('students')
let divDocenten = document.getElementById('teachers')
let divInschrijvingen = document.getElementById('enrollments')

tabCursussen.addEventListener('click', ()=>{
    tabCursussen.classList.toggle("active")
    divCursus.classList.toggle("active")
})

tabStudents.addEventListener('click', ()=>{
    tabStudents.classList.toggle("active")
    divStudent.classList.toggle("active")
})

tabTeachers.addEventListener('click', ()=>{
    tabTeachers.classList.toggle("active")
    divDocenten.classList.toggle("active")
})

tabEnrollments.addEventListener('click', ()=>{
    tabEnrollments.classList.toggle("active")
    divInschrijvingen.classList.toggle("active")
})







const resetAlleLijst = () =>{
    Cursurs.toonAlleCursussen(divCursusLijst)
    Student.toonAlleStudenten(divStudentLijst)
    Docent.toonAlleDocenten(divDocentenLijst)
    Inschrijvingen.toonAlleInschrijvingen(divInschrijvingenLijst)
}

resetAlleLijst();