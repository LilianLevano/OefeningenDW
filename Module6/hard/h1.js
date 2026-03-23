'use strict';

let divWeatherDisplay = document.getElementById('weather-display')





let zoekButton = document.getElementById('search-button')
.addEventListener('click', ()=>{

    let cityInput = document.getElementById('city-input')
 

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput.value}&count=1&language=en&format=json`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        let lat = data.results[0].latitude
        let lon = data.results[0].longitude

        console.log(lat);
        console.log(lon);
        


        let weatherCard = document.createElement('div')
        weatherCard.classList.add('weather-card')

        let stad = document.createElement('h3')
        stad.textContent = cityInput.value
        weatherCard.appendChild(stad)

        let temperatuur = document.createElement('p')
        
        
        zoekNeerslagVanStad(lat, lon).then((temp) => {
            temperatuur.textContent = `${temp} °C`
        })
    
        weatherCard.appendChild(temperatuur)


        divWeatherDisplay.appendChild(weatherCard)

    }


)
    


})

const zoekNeerslagVanStad = async (lan, lon) => {

   

    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lan}&longitude=${lon}&current=temperature_2m`);
    const data = await res.json();
    console.log(data);
    return data.current.temperature_2m;


}