let alleProducten = []

let buttonProductToevoegen = document.getElementById('addToCart')
let naamProductInput = document.getElementById('productName')
let prijsProductInput = document.getElementById('productPrice')
let somProducten = 0;
let tekstTotaal = document.getElementById('total')
let buttonSorteerOpPrijs = document.getElementById('sortByPrice')
let ul = document.getElementById('cartItems')
let alleVerwijderKnopArray = []
let alleVerwijderKnopSorteerArray = []


buttonProductToevoegen.addEventListener('click', function(){
    let product ={
        naam: naamProductInput.value,
        prijs: Number(prijsProductInput.value),
        
    }
    alleProducten.push(product)

    let li = document.createElement('li')
    li.textContent = product.naam + ": " + product.prijs + "€"
    li.id = product.naam + alleProducten.indexOf(product)

  let verwijderKnop = document.createElement('button')
            verwijderKnop.textContent = "Verwijderen"
            verwijderKnop.classList.add('knop_verwijderen')
            alleVerwijderKnopArray.push(verwijderKnop)



            for(let knop of alleVerwijderKnopArray){
                knop.value = alleVerwijderKnopArray.indexOf(knop)
            }

            console.log(alleProducten);
            


    ul.appendChild(li).appendChild(verwijderKnop)

       verwijderKnop.addEventListener('click', function() {

        let indexVanKnop = this.value

        alleVerwijderKnopArray.splice(indexVanKnop, 1)
        alleProducten.splice(indexVanKnop, 1)
        
       this.parentElement.remove()

          for(let knop of alleVerwijderKnopArray){
                knop.value = alleVerwijderKnopArray.indexOf(knop)
            }

            updateTotal()

            
        
    })
    
   updateTotal()
    naamProductInput.value = null;
    prijsProductInput.value = null;
})


buttonSorteerOpPrijs.addEventListener('click', function(){
    
        alleVerwijderKnopArray = []
        alleProducten.sort((a,b) => a.prijs - b.prijs)
        let alleLi = document.querySelectorAll('li')

        for(let li of alleLi){
            li.remove()
        }

    let verwijderKnop
       for(let product of alleProducten){
           let li = document.createElement('li')
            li.textContent = product.naam + ": " + product.prijs + "€"
            li.id = product.naam + alleProducten.indexOf(product)

        verwijderKnop = document.createElement('button')
                    verwijderKnop.textContent = "Verwijderen"
                    verwijderKnop.classList.add('knop_verwijderen')
                    alleVerwijderKnopArray.push(verwijderKnop)
        ul.appendChild(li).appendChild(verwijderKnop)

        verwijderKnop.addEventListener('click', function() {

        let indexVanKnop = this.value

        alleVerwijderKnopArray.splice(indexVanKnop, 1)
        alleProducten.splice(indexVanKnop, 1)
        
       this.parentElement.remove()

          for(let knop of alleVerwijderKnopArray){
                knop.value = alleVerwijderKnopArray.indexOf(knop)
            }

            updateTotal()

        
        })


                    for(let knop of alleVerwijderKnopArray){
                        knop.value = alleVerwijderKnopArray.indexOf(knop)
                    }
        
       }
       

         for(let knop of alleVerwijderKnopSorteerArray){
                knop.value = alleVerwijderKnopSorteerArray.indexOf(knop)
            }

    
    })



function updateTotal(){
    let somProducten = 0
     for(let product of alleProducten){
        somProducten += product.prijs
    }

    tekstTotaal.textContent = somProducten
}










