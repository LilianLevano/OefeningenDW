let alleProducten = []

const buttonProductToevoegen = document.getElementById('addToCart')
const naamProductInput = document.getElementById('productName')
const prijsProductInput = document.getElementById('productPrice')
const tekstTotaal = document.getElementById('total')
const buttonSorteerOpPrijs = document.getElementById('sortByPrice')
const ul = document.getElementById('cartItems')


buttonProductToevoegen.addEventListener('click', function(){

    const naam = naamProductInput.value
    const prijs = Number(prijsProductInput.value)       // we nemen prijs en naam uit de input balk

   

    const product = { naam: naam, prijs: prijs }    // we maken een object

    alleProducten.push(product)         // we pushen het object in de array

    render()
    updateTotal()

    naamProductInput.value = ""
    prijsProductInput.value = ""
})


buttonSorteerOpPrijs.addEventListener('click', function(){
    alleProducten.sort((a,b) => a.prijs - b.prijs)      // we sorteren op basis van prijs
    render()
})

// Belangrijk concept!!!! ==> closure
// een loop gaat bij elke loop nieuwe functies maken met de informatie van de huidige index
// zo kunnen we buttons gebruiken voor elke element, elke button houdt eigenlijk de informatie van de index waarmee het gemaakt werd


function render(){

    // deze functie refresht altijd de hele lijst

    ul.innerHTML = "";          // we maken de ul leeg

    for(let i = 0; i < alleProducten.length; i++){      // we loopen door alle producten die we hebben gemaakt

        let product = alleProducten[i];                 // we stockeren de huidige product in de loop in "product"

        let li = document.createElement("li");          // we maken een li
        li.textContent = product.naam + ": €" + product.prijs.toFixed(2) + " "; // we zetten de naam van de product + zijn prijs in de li

        let btn = document.createElement("button");     // we maken een verwijder button
        btn.textContent = "Verwijderen";

        btn.addEventListener("click", function(){       // wanneer we de button verwijderen drukken

            alleProducten.splice(i, 1);                 // uit de lijst van alle producten, zal het de huidige product (i) nemen en splicen
            render();                   // we refreshen de hele pagina
            updateTotal();

        });

        li.appendChild(btn);            // we zetten de button naast de li
        ul.appendChild(li);
    }
}


function updateTotal(){

    const totaal = alleProducten
        .reduce((som, product) => som + product.prijs, 0)

    tekstTotaal.textContent = totaal.toFixed(2)
}