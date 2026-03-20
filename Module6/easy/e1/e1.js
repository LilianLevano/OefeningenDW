let buttonOphalen = document.getElementById('haalTekstOp')
let divRsultaat = document.getElementById('resultaat')

buttonOphalen.addEventListener('click', () =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then(response => response.json())
    .then(data => {
        console.log(data);
        divRsultaat.innerHTML = "";

        let h1 = document.createElement('h1')
        h1.textContent = data.title
        divRsultaat.appendChild(h1)

        let p = document.createElement('p')
        p.textContent = data.body
        divRsultaat.appendChild(p)


    })

    .catch(error =>{
        console.log(error.message);
        divRsultaat.textContent = error.message
    })
})