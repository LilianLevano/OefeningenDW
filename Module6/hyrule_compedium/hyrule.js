let alleCategorieen = document.querySelectorAll(".categorie");
let laatsteGeselecteerdeCategorie = document.getElementById("eersteCat");
let divItems = document.getElementById("items-container");
let alleItems = document.querySelectorAll(".item");
let laatsteGekozeItem;

document.addEventListener("DOMContentLoaded", async () => {
  await resetItemContainer();
  alleItems = document.querySelectorAll(".item");


});

document.getElementById('test').addEventListener('click', () =>{
    console.log(laatsteGekozeItem);
    
});


for (let buttonCategorie of alleCategorieen) {
  buttonCategorie.addEventListener("click", async () => {
    laatsteGeselecteerdeCategorie = buttonCategorie;

    await resetItemContainer();

    alleItems = document.querySelectorAll(".item");
  
  });
}

async function resetItemContainer() {
  divItems.innerHTML = "";

  let valueGeselecteerdeCategorie =
    laatsteGeselecteerdeCategorie.getAttribute("value");

  await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${valueGeselecteerdeCategorie}`,
  )
    .then((res) => res.json())
    .then((data) => {
      let lijstData = data.data;

      for (let item of lijstData) {
        let naamItem = item.name;
        let idItem = item.id;
        let urlImageItem = item.image;

        let itemCard = document.createElement("article");
        itemCard.classList.add("item");

        itemCard.addEventListener("click", () => {
          console.log(itemCard);
          console.log(itemCard.getAttribute("value"));
          laatsteGekozeItem = itemCard
          toonAlleInfo(itemCard)
          
          
        });

        let divInfoItem = document.createElement("div");
        divInfoItem.classList.add("info-item");

        let titelItem = document.createElement("h2");
        titelItem.classList.add("titel-item");
        titelItem.textContent = naamItem;

        divInfoItem.appendChild(titelItem);

        let idItemHTML = document.createElement("p");
        idItemHTML.classList.add("id-item");
        idItemHTML.textContent = idItem;

        divInfoItem.appendChild(idItemHTML);

        let img = document.createElement("img");
        img.src = urlImageItem;

        itemCard.appendChild(img);
        itemCard.appendChild(divInfoItem);
        itemCard.setAttribute("value", idItem);
        divItems.appendChild(itemCard);
      }
    });
}



function toonAlleInfo(itemCard){
    alert(itemCard.getAttribute('value'))

    let cover = document.createElement('section')
    cover.classList.add('cover')

    let article = document.createElement('article')
    cover.appendChild(article)

    let buttonSluiten = document.createElement('button')
    

    document.body.appendChild(cover)

    
}
