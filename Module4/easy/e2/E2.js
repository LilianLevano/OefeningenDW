let divOutput = document.getElementById('output')
divOutput.style.whiteSpace = "pre-wrap"

class Product{
    constructor(naam, prijs, voorraad){
        this.naam = naam;
        this._prijs = 0;
        this.prijs = prijs;
        this._voorraad = 0;
        this.voorraad = voorraad;
    }

    set prijs(prijs){
        if(prijs < 0){
            throw new Error("Ongeldige Prijs")
        }else{
            this._prijs = prijs;
        }
    }

    set voorraad(voorraad){
       if(voorraad < 0){
            throw new Error("Ongeldige voorraad")
        }else{
            this._voorraad = voorraad;
        }
    }

    get prijsMetBTW(){
        return this._prijs * 1.21
    }

    get beschikbaarheid(){
        if(this._voorraad < 0){
            return false
        }else{
            return true
        }
    }

    get samenvatting(){
        return `Naam van de product: ${this.naam}
        \tPrijs: ${this.prijsMetBTW}
        \tBeschikbaarheid: ${this.beschikbaarheid}
        \n`
    }

}

let banaan = new Product("Banaan", 20, 10)
let appel = new Product("Appel", 5, 2)
let ananas = new Product("Ananas", 79, 80)

let alleProducten = [];
alleProducten.push(banaan, appel, ananas)
let output = ``

for(let product of alleProducten){
    output += product.samenvatting
}

divOutput.textContent = output






