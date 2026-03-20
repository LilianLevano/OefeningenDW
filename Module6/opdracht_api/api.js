let buttonHeroNaamOpzoeken = document.getElementById('hero_naam_submit')
let divHeroData = document.getElementById('hero_data')
divHeroData.style.whiteSpace = "pre-wrap"
buttonHeroNaamOpzoeken.addEventListener('click', ()=>{
    let heroNaamInput = document.getElementById('hero_opzoeken')
    let heroNaam = heroNaamInput.value 

    let urlHero = `https://api.allorigins.win/raw?url=https://superheroapi.com/api/099bd75277c0137df5e7f632d26e91b9/search/${heroNaam}`
    divHeroData.innerHTML = "";


    fetch(urlHero)

        .then(response => response.json())
        .then(data =>{
            console.log(data);
            
            let arrayHeroResults = data.results
            console.log(arrayHeroResults);

            let ul = document.createElement('ul')
            divHeroData.appendChild(ul)

            for(let hero of arrayHeroResults){
                let li = document.createElement('li')
                let p = document.createElement('p')

                let overzicht = `Code van hero: ${hero.name}
                Full name hero: ${hero.biography["full-name"]}`

                p.textContent = overzicht

                let urlImg = hero.image.url
                let img = document.createElement('img')
                img.src = urlImg
                console.log(urlImg);
                

                li.appendChild(p)
                li.appendChild(img)

                let idHero = hero.id 
                console.log(idHero);

                let buttonMeerInfo = document.createElement('button')
                buttonMeerInfo.value = idHero
                buttonMeerInfo.textContent = "Meer info"

                li.appendChild(buttonMeerInfo)
                
   

                ul.appendChild(li)
            }
            

        })
        .catch(error =>{
            console.log(`${error.message}`);
        })

        console.log();
        
})