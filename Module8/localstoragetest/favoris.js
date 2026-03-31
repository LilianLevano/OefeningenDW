initialiseerFavorites();

let buttonAdd = document.getElementById('a')
buttonAdd.addEventListener('click', () =>{
    addFavorite();
})

let buttonGet = document.getElementById('b')
buttonGet.addEventListener('click', ()=>{
    console.log(getFavorites());
})

let buttonRemove = document.getElementById('c').addEventListener('click', ()=>{
    removeFavorite();
})

function initialiseerFavorites(){
    if(localStorage.getItem('favorite') === null){
        localStorage.setItem('favorite', JSON.stringify([]))
    }
}

function addFavorite(){
    let arrayFavorites = getFavorites();

    let toAddFavoriteInput = document.getElementById('favorite').value;

    if(arrayFavorites.includes(toAddFavoriteInput)){ 
        console.warn("Deze item bestaat al");
    }else{
        arrayFavorites.push(toAddFavoriteInput)
    }

    setFavorites(arrayFavorites)

}

function getFavorites(){
    return JSON.parse(localStorage.getItem('favorite')) || [];
}

function setFavorites(arrayFavorites){
    localStorage.setItem('favorite', JSON.stringify(arrayFavorites))
}

function removeFavorite(){
    let favorites = getFavorites();
    let toRemove = document.getElementById('favorite').value;

    if(!(favorites.includes(toRemove))){
        console.warn("Deze item bestaat niet");
        return   
    }

    favorites = favorites.filter(item => item !== toRemove)

    setFavorites(favorites)
}