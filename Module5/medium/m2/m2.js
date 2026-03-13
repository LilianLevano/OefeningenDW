let inputSeconds = document.getElementById("seconds");
let startButton = document.getElementById("startButton");
let cancelButton = document.getElementById("cancelButton");
let divTimer = document.getElementById("timerDisplay");
let divMessage = document.getElementById("message");


let cancelTimer;        // we initialiseren cancelTimer zodat we die in startTimer kan vullen met de functie dan later gebruiken


function startTimer(seconds) {
  return new Promise((resolve, reject) => {
    let tijd = seconds;
    divTimer.textContent = tijd;

    startButton.disabled = true;
    cancelButton.disabled = false;

    // we declareren de interval zodat we die kunnen stoppen met clearInterval();
    let interval = setInterval(() => {      //interval gebruiken om die terug te laten gebeuren, zoals een loop
      tijd--;
      divTimer.textContent = tijd;

         if (tijd == 0) {           //als de timer 0 is dan stopt de interval en geeft resolve terug die we in .then nemen
            resolve("Klaar!");
            clearInterval(interval);
            console.log(tijd);   
        }
    }, 1000);

    cancelTimer = () =>{
        cancelButton.disabled = true
        clearInterval(interval)
        reject("Geannuleerd")
    }



 
  });
}

startButton.addEventListener("click", () => {
  startTimer(Number(inputSeconds.value))
  
  .then((result) => {
    divMessage.style.display = "block"
    divMessage.textContent = result;
    console.log("klaar");
    
  })

  .catch((error) =>{
     divMessage.style.display = "block"
    divMessage.textContent = error;
    console.log("error");
    
  })

  .finally(() =>{
    startButton.disabled = false;
    cancelButton.disabled = true;
  })
});

cancelButton.addEventListener('click', () =>{
    cancelTimer();
})
