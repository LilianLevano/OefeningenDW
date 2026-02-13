

let alleTitels = document.querySelectorAll('h1, h2') // nemen alle titels samen om een voldorge te krijgen volgens DOM
let nav = document.getElementById('mainMenu')
let ul = document.createElement('ul')
nav.appendChild(ul) // we maken de eerste en hoofd ul van onze list in de main menu
let laatsteSubUl = null; // we initialiseren wat we later zullen gebruiken


for(let titel of alleTitels){


    if(titel.tagName === 'H1'){     // in de h1 gaan we de titel plaatsen en een plaats maken voor de subtitel

        let hoofdLi = document.createElement('li')
        ul.appendChild(hoofdLi).appendChild(titel)  // voeg een li met de titel toe

        let subUl = document.createElement('ul')
        hoofdLi.appendChild(subUl)      // we maken een ul die momenteel leeg is

        laatsteSubUl = subUl // we onthouden wat de laatste subUl was zodat we in volgorde later iets kunnen toevoegen

     
    }else if (titel.tagName === 'H2' && laatsteSubUl){      // als de titel h2 is en dat er voor dit een sub ul al gemaakt werd
        let liSub = document.createElement('li')        // we maken een li element
        laatsteSubUl.appendChild(liSub).appendChild(titel) // we voegen een li met de subtitel in de al geonthouden sub ul
    }
    


}

console.log(alleTitels)
console.log("Eind loop")

