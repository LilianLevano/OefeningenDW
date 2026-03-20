let buttonHeroNaamOpzoeken = document.getElementById("hero_naam_submit");
let divHeroData = document.getElementById("hero_data");
divHeroData.style.whiteSpace = "pre-wrap";
buttonHeroNaamOpzoeken.addEventListener("click", () => {
  let heroNaamInput = document.getElementById("hero_opzoeken");
  let heroNaam = heroNaamInput.value;

 let urlHero = `https://corsproxy.io/?${encodeURIComponent(
  `https://superheroapi.com/api/099bd75277c0137df5e7f632d26e91b9/search/${heroNaam}`
)}`;
  divHeroData.innerHTML = "";

  fetch(urlHero)
    .then((response) => response.json())
    .then((data) => {vulDivHero(data);})
    .catch((error) => {
      console.log(`${error.message}`);
    });
});

const vulDivHero = (data) => {
  console.log(data);
  let arrayHeroResults = data.results;
  

  let ul = document.createElement("ul");
  divHeroData.appendChild(ul);

  for (let hero of arrayHeroResults) {
    let li = document.createElement("li");
    let p = document.createElement("p");

    let overzicht = `Code van hero: ${hero.name}
                Full name hero: ${hero.biography["full-name"]}`;

    p.textContent = overzicht;

    let urlImg = hero.image.url;
    let img = document.createElement("img");
    img.src = urlImg;
   

    li.appendChild(p);
    li.appendChild(img);

    let idHero = hero.id;
    

    let buttonMeerInfo = document.createElement("button");
    buttonMeerInfo.value = idHero;
    buttonMeerInfo.textContent = "Meer info";

    li.appendChild(buttonMeerInfo);

    ul.appendChild(li);
  }
};
