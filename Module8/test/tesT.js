// let info = {
//     naam: "Lilian",
//     age: 19,
//     theme: "dark"
// }

// localStorage.setItem("info", JSON.stringify(info))



// let button = document.getElementById('a')

// button.addEventListener('click', ()=>{
//     let info2 = JSON.parse(localStorage.getItem("info")) 
//     console.log(info2);
     
// })


// navigator.geolocation.getCurrentPosition(position =>{
//     let lat = position.coords.latitude
//     let lon = position.coords.longitude

//     console.log(`Positie: ${lat}, ${lon}`);
    
// }, error=>{
//     console.error("Positie niet gevonden " + error.message);
    
// }, {
//     enableHighAccuracy: false,
//     timeout: 5000,
//     maximumAge:0

// })

 
    // // Reageren op veranderingen in de DOM
    // const commentSection = document.querySelector('.comments');

    // const observer = new MutationObserver(mutations => {
    //   for (const mutation of mutations) {
    //     if (mutation.type === 'childList' && mutation.addedNodes.length) {
    //       console.log('Nieuwe comment toegevoegd!');
        
    //     }else if(mutation.type === 'childList' && mutation.removedNodes.length){
    //         console.log('Comment verwijderd');
            
    //     }
    //   }
    // });

    // // Start met observeren
    // observer.observe(commentSection, { 
    //   childList: true, 
    //   subtree: true 
    // });

    // let p = document.createElement('p')
    // commentSection.append(p)
    // p.remove()

     
    // Elementen detecteren die in beeld komen
    // Elementen detecteren die in beeld komen
    // const lazyImages = document.querySelectorAll('img.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is in beeld
          const img = entry.target;
          
          // Vervang data-src door src om het laden te starten
          img.src = "image.png";
          img.classList.remove('lazy');
          
          // Stop met observeren nadat de afbeelding is geladen
          observer.unobserve(img);
        }
        
      });
    }, {
      // Opties
      rootMargin: '100px 0px', // Laad alvast afbeeldingen die binnen 100px van het scherm zijn
      threshold: 0.1 // Trigger wanneer minstens 10% zichtbaar is
    });
    
    // Start met observeren
    lazyImages.forEach(img => imageObserver.observe(img));