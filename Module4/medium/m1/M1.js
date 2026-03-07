let divOutput = document.getElementById("output");
let ul = document.createElement("ul");
divOutput.appendChild(ul);
divOutput.style.whiteSpace = "pre-wrap";
let alleVoertuigen = [];

class Voertuig {
  constructor(merk, model, jaar, verhuurPrijs, beschikbaar = true) {
    this.merk = merk;
    this.model = model;
    this.jaar = jaar;
    this.verhuurPrijs = verhuurPrijs;
    this.beschikbaar = beschikbaar;
  }

  verhuur() {
    this.beschikbaar = false;
    console.log("Verhuurd");
  }

  retourneer() {
    this.beschikbaar = true;
    console.log("Geretourneerd");
  }
}

class Auto extends Voertuig {
  constructor(
    merk,
    model,
    jaar,
    verhuurPrijs,
    beschikbaar,
    aantalDeuren,
    brandstofType,
  ) {
    super(merk, model, jaar, verhuurPrijs, beschikbaar);
    this.aantalDeuren = aantalDeuren;
    this.brandstofType = brandstofType;
  }

  verhuur() {
    this.beschikbaar = false;
    alert('Auto Verhuurd')
    console.log("Auto Verhuurd");
  }

  retourneer() {
    this.beschikbaar = true;
    alert('Auto Geretourneerd')
    console.log("Auto Geretourneerd");
  }
}

class Motor extends Voertuig {
  constructor(
    merk,
    model,
    jaar,
    verhuurPrijs,
    beschikbaar,
    cilinderInhoud,
    type,
  ) {
    super(merk, model, jaar, verhuurPrijs, beschikbaar);
    this.cilinderInhoud = cilinderInhoud;
    this.type = type;
  }

  verhuur() {
    this.beschikbaar = false;
    alert('Motor Verhuurd')
    console.log("Motor Verhuurd");
  }

  retourneer() {
    this.beschikbaar = true;
    alert('Motor Geretourneerd')
    console.log("Motor Geretourneerd");
  }
}

let typeVoertuig = document.getElementById("typeVoertuig");

let merkInput = document.getElementById("merk");
let modelInput = document.getElementById("model");
let jaarInput = document.getElementById("jaar");
let verhuurPrijsInput = document.getElementById("verhuurPrijs");
let beschikbaarheidInput = document.getElementById("beschikbaarheid");
let aantalDeurenInput = document.getElementById("aantalDeuren");
let brandstofTypeInput = document.getElementById("brandstofType");
let cilinderInhoudInput = document.getElementById("cilinderInhoud");
let typeInput = document.getElementById("type");

let registreerButton = document.getElementById("registreer");

typeVoertuig.addEventListener("change", () => {
  const isMotor = typeVoertuig.value === "motor";
  // checkt de value van type voertuig, als de select "motor" is dan is isMotor true

  //isMotor wordt gebruikt bij de toggle, als deze true is dan worden de auto inputs verborgen
  // als isMotor false is dan worden motor inputs verborgen

  //!! bij toggle --> als de variabele die erbij steekt is true dan wordt de classe toegevoegd
  // als de variabele false is wordt de classe verwijderd
  aantalDeurenInput.classList.toggle("verbergen", isMotor);
  brandstofTypeInput.classList.toggle("verbergen", isMotor);
  cilinderInhoudInput.classList.toggle("verbergen", !isMotor);
  typeInput.classList.toggle("verbergen", !isMotor);
});

let voertuigInput = document.getElementById("voertuigSelect");
registreerButton.addEventListener("click", () => {
  

  if (typeVoertuig.value === "motor") {
    let nieuweMotor = new Motor(
      merkInput.value,
      modelInput.value,
      jaarInput.value,
      Number(verhuurPrijsInput.value),
      beschikbaarheidInput.value,
      Number(cilinderInhoudInput.value),
      typeInput.value,
    );

    alleVoertuigen.push(nieuweMotor);
  } else if (typeVoertuig.value === "auto") {
    let nieuweAuto = new Auto(
      merkInput.value,
      modelInput.value,
      jaarInput.value,
      Number(verhuurPrijsInput.value),
      beschikbaarheidInput.value,
      Number(aantalDeurenInput.value),
      brandstofTypeInput.value,
    );

    alleVoertuigen.push(nieuweAuto);
  }

  voertuigInput.innerHTML = "";

  for (let voertuig of alleVoertuigen) {
    let option = document.createElement("option");
    option.value = voertuig.model;
    option.textContent = `${voertuig.merk}, ${voertuig.model}`;
    voertuigInput.appendChild(option);
  }

  refreshUl();

  merkInput.value = "";
  modelInput.value = "";
  jaarInput.value = "";
  verhuurPrijsInput.value = "";
  aantalDeurenInput.value = "";
  brandstofTypeInput.value = "";
  cilinderInhoudInput.value = "";
  typeInput.value = "";
});


let buttonVerhuur = document.getElementById('verhuurVoertuig')

buttonVerhuur.addEventListener('click', ()=>{
 
  const voertuigInput = document.getElementById('voertuigSelect')

  const gekozeVoertuig = alleVoertuigen.find(voertuig => voertuig.model === voertuigInput.value)
  
  gekozeVoertuig.verhuur();

  console.log(gekozeVoertuig);
  refreshUl();
  
  


})

let buttonRetourneer = document.getElementById('retourneerVoertuig')
buttonRetourneer.addEventListener('click', ()=>{

  const voertuigInput = document.getElementById('voertuigSelect')

  const gekozeVoertuig = alleVoertuigen.find(voertuig => voertuig.model === voertuigInput.value)
  
  gekozeVoertuig.retourneer();

  console.log(gekozeVoertuig);
  refreshUl();
  
  


})


const refreshUl = () =>{

  ul.innerHTML = "";
    for (let voertuig of alleVoertuigen) {
    console.log("Hey");

    let li = document.createElement("li");

    let overzicht = `Merk: ${voertuig.merk}
        \tModel: ${voertuig.model}
        \tJaar: ${voertuig.jaar}
        \tVerhuur prijs: ${voertuig.verhuurPrijs}
        \tBeschikbaarheid: ${voertuig.beschikbaar}
        `;

    if (voertuig instanceof Motor) {
      overzicht += `\tCilinder inhoud: ${voertuig.cilinderInhoud}
          \tType motor: ${voertuig.type}
          `;
    } else if (voertuig instanceof Auto) {
      overzicht += `\tAantal deuren: ${voertuig.aantalDeuren}
          \tBrandstof type: ${voertuig.brandstofType}
          `;
    }

    li.textContent += overzicht;
    ul.appendChild(li);
  }
}
