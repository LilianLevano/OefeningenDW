let divAccounts = document.getElementById('accounts')
divAccounts.style.whiteSpace = "pre-wrap"

let divTransactie = document.getElementById('transactions')
divTransactie.style.whiteSpace = "pre-wrap"

class Bankrekening {

    static rekeningnummer = 0;

    constructor(eigenaar, saldo){
        this._rekeningnummer =  Bankrekening.rekeningNrGenerator()
        this._eigenaar = eigenaar
        this._saldo = 0;
        this.saldo = saldo
        
    }

    get rekeningnummer(){
        return this._rekeningnummer
    }

    get eigenaar(){
        return this._eigenaar
    }

    get saldo(){
        return this._saldo
    }

    set saldo(saldo){
        if(saldo < 0){
            alert('Saldo kan niet negatief gaan.')
            return
        }else{
            this._saldo = saldo;
        }
    }

    storten(bedrag){

        this._saldo += bedrag
        alert(`${bedrag} werd gestort op bankrekening met nummer: ${this._rekeningnummer}.`)

    }

    opnemen(bedrag){
        if((this._saldo - bedrag) < 0){
            alert('Het gegeven op te nemen bedrag is groter dan de saldo. Probeer opnieuw')
            return false
        }else{
            this._saldo  -= bedrag
            alert(`${bedrag} werd opgenomen van bankrekening met nummer: ${this._rekeningnummer}.`)
            return true
        }
    }

    get overzicht(){
        return `Rekeningnummer: ${this.rekeningnummer}
        \tEigenaar: ${this.eigenaar}
        \tSaldo: ${this._saldo}\n`
    }

    static rekeningNrGenerator(){
       return Bankrekening.rekeningnummer++
    }

    static validerenTransactie(from, to, bedrag){

        if(from.opnemen(bedrag)){
            to.storten(bedrag)
            return `Van rekeninnummer: ${from._rekeningnummer} werd ${bedrag} euro genomen en naar rekeningnummer: ${to._rekeningnummer} gestuurd.\n`
        }else{
            return
        }
        


    }


} 

class Spaarrekening extends Bankrekening{
    constructor(eigenaar, saldo, rentePercentage){
        super(eigenaar, saldo)
        this._rentePercentage = rentePercentage;
    }

    renteToevoegen(){

        this._rentePercentage /= 100;
        this._rentePercentage += 1

        this.saldo *= this._rentePercentage; 
    }
}

let spaarrekening = new Spaarrekening("Lilian", 100, 90)
let spaarrekening1 = new Spaarrekening("Siebe", 10)
let spaarreking2 = new Spaarrekening("Joachim", 700, 10)
let bankrekening = new Bankrekening("Flo", 89)
spaarrekening.renteToevoegen();
spaarreking2.renteToevoegen();


divTransactie.textContent += Bankrekening.validerenTransactie(spaarrekening, spaarrekening1, 10)
divTransactie.textContent += Bankrekening.validerenTransactie(spaarreking2, bankrekening, 500)


divAccounts.textContent = spaarrekening.overzicht + spaarrekening1.overzicht + spaarreking2.overzicht + bankrekening.overzicht
