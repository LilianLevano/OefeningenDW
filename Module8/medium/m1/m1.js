let button = document.getElementById('getWeather')
let loader = document.getElementById('loader')
let weatherData = document.getElementById('weather-data')
let cachedNotice = document.getElementById('cached-notice')
cachedNotice.textContent = "Laatste temperatuur: " + localStorage.getItem('laatste_temperatuur')


button.addEventListener('click', ()=>{

loader.style.display = "block";

    navigator.geolocation.getCurrentPosition(async position =>{

            try {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
                let data = await res.json();

                let temperatuur = data.current.temperature_2m;
                console.log(temperatuur);

                weatherData.innerHTML = "";
                weatherData.textContent = temperatuur + " °C"
                cachedNotice.textContent = "Laatste temperatuur: " + temperatuur + " °C"
                localStorage.setItem("laatste_temperatuur", temperatuur + "° C")

            } catch (error) {
                console.error(error.message);
            } finally {
                loader.style.display = "none";
            }
    }, error => {
        console.error(error.message);
        loader.style.display = "none";
    })

    

    




   
    
    


})