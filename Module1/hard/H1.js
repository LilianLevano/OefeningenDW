

let alleTitels = document.querySelectorAll('h1, h2') // nemen alle titels samen om een voldorge te krijgen volgens DOM
let nav = document.getElementById('mainMenu')
let ul = document.createElement('ul')
nav.appendChild(ul) // we maken de eerste en hoofd ul van onze list in de main menu
let laatsteSubUl = null; // we initialiseren wat we later zullen gebruiken

let hoofdtitelCount = 1;
let classVoorSub = null;
let subUlCount = 1;

alleTitels.forEach(titel => {
    if (!titel.id) {
        titel.id = titel.textContent.replace(/\s+/g, '-'); // Hoofdstuk-1 etc.
    }
});

for(let titel of alleTitels){

    if(titel.tagName === 'H1'){     // in de h1 gaan we de titel plaatsen en een plaats maken voor de subtitel

        let hoofdLi = document.createElement('li')
        let aHoofd = document.createElement('a')
       
        hoofdLi.classList.add("hoofd-li")
        classVoorSub = titel.id
        
        aHoofd.textContent = titel.textContent

        aHoofd.href = '#' + titel.id + "-page";
        aHoofd.id = titel.id
        aHoofd.classList.add('hoofd-a')
        ul.appendChild(hoofdLi).appendChild(aHoofd) // voeg een li met de titel toe

        let subUl = document.createElement('ul')
        hoofdLi.appendChild(subUl)      // we maken een ul die momenteel leeg is
        subUl.classList.add("subUl")
        subUl.id = classVoorSub + "-" + subUlCount
        subUlCount++;

        laatsteSubUl = subUl // we onthouden wat de laatste subUl was zodat we in volgorde later iets kunnen toevoegen
        
      
     
    }else if (titel.tagName === 'H2' && laatsteSubUl){      // als de titel h2 is en dat er voor dit een sub ul al gemaakt werd
        let liSub = document.createElement('li')        // we maken een li element

        liSub.classList.add('subLi')
       
        let aSub = document.createElement('a')
        aSub.href = '#' + titel.id;

        aSub.textContent = titel.textContent


        laatsteSubUl.appendChild(liSub).appendChild(aSub) // we voegen een li met de subtitel in de al geonthouden sub ul
    }
    
    
}


let alleHoofdtitelsLi = document.querySelectorAll('.hoofd-li .hoofd-a')


for(let hoofdtitel of alleHoofdtitelsLi){

    let subUlVanHoofdtitel = document.querySelectorAll('.subUl')

            hoofdtitel.addEventListener('click', function(){
            
                for(let subtitel of subUlVanHoofdtitel){
                    let currentDisplay = window.getComputedStyle(subtitel).display

                        if(subtitel.id.includes(hoofdtitel.id)){
                            if(currentDisplay === "block"){
                                subtitel.style.display = "none"
                                hoofdtitel.style.color = "blue"

                            }else if (currentDisplay === "none") {
                                subtitel.style.display = "block"
                                hoofdtitel.style.color = "green"
                            }
                      }   
                      subtitel.style.color = "blue"
            }   
        })
}




