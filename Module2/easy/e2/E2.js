let naamReceptInput = document.getElementById("recipeName");
let bereidingsTijdInput = document.getElementById("prepTime");
let ingredientenInput = document.getElementById("ingredients");
let buttonGenereer = document.getElementById("generateCard");
let alleIngredientenText = null;

ingredientenInput.addEventListener("input", function () {
  alleIngredientenText = ingredientenInput.value.split(/\r?\n/);

  console.log(alleIngredientenText);
});

let divResult = document.getElementById("result")
divResult.style.whiteSpace = "pre-wrap"


buttonGenereer.addEventListener("click", function () {


  let naamReceptText = naamReceptInput.value
  let bereidingsTekst = bereidingsTijdInput.value

  let result = `
  Recept: 
  -------------- 
  Titel: ${naamReceptText} 
  Bereidings tijd: ${bereidingsTekst} 
  Ingredienten: 
  `;
  
  console.log(result);
  
  let p = document.createElement('p')
  p.textContent = result
  divResult.appendChild(p)

   let ul = document.createElement("ul");
    divResult.appendChild(ul);
    
for (let ingredient of alleIngredientenText) {
        let li = document.createElement("li");
        li.textContent = ingredient;
        ul.appendChild(li);
  }

 

});


