let alleCategorieen = document.querySelectorAll('.categorie')
let laatsteGeselecteerdeCategorie = document.getElementById('eersteCat');
let divItems = document.getElementById('items-container')



for(let buttonCategorie of alleCategorieen){
    buttonCategorie.addEventListener('click', () =>{
        laatsteGeselecteerdeCategorie = buttonCategorie;
        console.log(laatsteGeselecteerdeCategorie.getAttribute("value"));
        resetItemContainer();
        
    })
}

function resetItemContainer (){

    divItems.innerHTML = "";

    let valueGeselecteerdeCategorie = laatsteGeselecteerdeCategorie.getAttribute('value')

    fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${valueGeselecteerdeCategorie}`)
    .then(res => res.json())
    .then(data =>{
        let lijstData = data.data

        console.log(lijstData);
        

        for(let item of lijstData){
            let naamItem = item.name
            let idItem = item.id
            let urlImageItem = item.image


            let itemCard = document.createElement('article')
            itemCard.classList.add('item')

            let divInfoItem = document.createElement('div')
            divInfoItem.classList.add('info-item')

            let titelItem = document.createElement('h2')
            titelItem.classList.add('titel-item')
            titelItem.textContent = naamItem

            divInfoItem.appendChild(titelItem)

            let idItemHTML = document.createElement('p')
            idItemHTML.classList.add('id-item')
            idItemHTML.textContent = idItem

            divInfoItem.appendChild(idItemHTML)

            let img = document.createElement('img')
            img.src = urlImageItem

            itemCard.appendChild(img)
            itemCard.appendChild(divInfoItem)
            itemCard.setAttribute('value', idItem)
            divItems.appendChild(itemCard)
            
        }
        
    })
}





