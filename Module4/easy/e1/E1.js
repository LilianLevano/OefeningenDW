let divOutput = document.getElementById('output')

class Student{

    constructor(naam, vakken){
       
        this.naam = naam;
        this.vakkenStudent = [];
        this.gemiddelde = null;
        
        for(let vak of vakken){
            this.vakkenStudent.push({naamVak: vak, punt: null})
        }
    }

    voegPuntToe(vak, punt){

       vak = this.vakkenStudent.find(vakken => vakken.naamVak == vak)

       if(!vak){
        return
       }else{
           vak.punt = punt;
       }
       
    }

    definieerGemiddelde(){        
        let som = null;
        
        for(let vak of this.vakkenStudent){
            som += vak.punt
        }

        this.gemiddelde = som / this.vakkenStudent.length
    }

    toonRapport(){
        
        let rapport = `\nRapport van ${this.naam}:\n`

        for(let vak of this.vakkenStudent){
            rapport += `\tNaam vak: ${vak.naamVak}
            \t\tPunt voor deze vak: ${vak.punt}\n`
        }

        rapport += `\tGemiddelde van deze student = ${this.gemiddelde}\n`
        

        divOutput.textContent += rapport;
        divOutput.style.whiteSpace = "pre-wrap"
    }
}

let student = new Student("Joa", ["PROG", "IT"])
student.voegPuntToe("PROG", 10)
student.voegPuntToe("IT", 7 )
student.definieerGemiddelde()
student.toonRapport()
console.log(student);

let student1 = new Student("Li", ["A", "B"])
student1.voegPuntToe("A", 15)
student1.voegPuntToe("B", 18 )
student1.definieerGemiddelde()
student1.toonRapport()
console.log(student1);
