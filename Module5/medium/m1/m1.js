const progressBar = document.querySelector('.progress-bar');
let isLoaded = false;
function laadAfbeelidgen(url){
    return new Promise ((resolve, reject) =>{
        const img = new Image();

        img.onload = () =>{
            resolve(img)
        }

        img.onerror = (error) =>{
            reject(error)
        }

        img.src = url;
    })
}

async function laadAlleAfbeeldingen() {

    if(isLoaded) return;
    isLoaded = true;
    try {
        const img1 = await laadAfbeelidgen("https://picsum.photos/200/300");
         document.body.appendChild(img1);
         progressBar.textContent = "33%"
         progressBar.style.width = "33%"

          const img2 = await laadAfbeelidgen("https://picsum.photos/300/300");
         document.body.appendChild(img2);
         progressBar.textContent = "66%"
         progressBar.style.width = "66%"

          const img3 = await laadAfbeelidgen("https://picsum.photos/400/300");
         document.body.appendChild(img3);
         progressBar.textContent = "100%"
         progressBar.style.width = "100%"
       
    } catch (error) {
        console.log('lol');
        progressBar.style.backgroundColor = "red"
        
    }
}

document.getElementById('loadButton').addEventListener('click', ()=>{
    laadAlleAfbeeldingen();
    
})