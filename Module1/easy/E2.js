

let loadingTekst = document.getElementById('loadingMessage')

window.addEventListener('load', function(){

    loadingTekst.textContent = "Welcome!"

    this.setTimeout(() => { loadingTekst.remove()}, 2000)

})
