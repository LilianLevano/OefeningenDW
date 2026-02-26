let tweetOutput = document.getElementById('tweetOutput')
let postOutput = document.getElementById('postOutput')
let comboOutput = document.getElementById('comboOutput')
let inputText = document.getElementById('inputText')


const formatText = () => {
    tweetOutput.innerHTML = inputText.value
    tweetOutput.style.color = "blue"


    postOutput.innerHTML = inputText.value
    postOutput.style.color = "red"


    comboOutput.innerHTML = `Tweet: ${tweetOutput.textContent}, post ${postOutput.textContent}`




}


let button = document.getElementById('formateer')
button.addEventListener("click", () =>{
    formatText();
} )
