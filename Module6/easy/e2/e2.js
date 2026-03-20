'use strict';
let divGebruikerContainer = document.getElementById('gebruikers-container')
let laadIndicator = document.querySelector('.laad-indicator')

document.addEventListener("DOMContentLoaded", function() {
      fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    

        for(let gebruiker of data){
        let naam = gebruiker.name
        let telefoon = gebruiker.phone
        let email = gebruiker.email
        
        let spanNaam = document.createElement('p')
        spanNaam.classList.add('gebruiker-naam')
        spanNaam.textContent = naam;

        let spanTel = document.createElement('p')
        spanTel.textContent = telefoon

        let spanEmail = document.createElement('p')
        spanEmail.classList.add('gebruiker-email')
        spanEmail.textContent = email

        let divGebruikerKaart = document.createElement('div')
        divGebruikerKaart.classList.add('gebruiker-kaart')

        divGebruikerKaart.appendChild(spanNaam)
        divGebruikerKaart.appendChild(spanEmail)
        divGebruikerKaart.appendChild(spanTel)


        


        divGebruikerContainer.appendChild(divGebruikerKaart)

        }

         laadIndicator.remove();
    })

    .catch(error =>{
        laadIndicator.remove();
        let p = document.createElement('p')
        p.textContent = error.message
        p.classList.add('error-melding')

        divGebruikerContainer.appendChild(p)
    })
    
});