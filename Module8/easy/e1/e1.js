let buttonSwitch = document.getElementById('themeToggle')

if(localStorage.getItem("prefered_theme") === null){
    localStorage.setItem("prefered_theme", "light-theme")
}

window.addEventListener('DOMContentLoaded', ()=>{
    
    let theme = localStorage.getItem('prefered_theme')
    
    document.body.classList.add(theme)
})


buttonSwitch.addEventListener('click', ()=>{

    let theme;

    if(localStorage.getItem("prefered_theme") === "dark-theme"){
        localStorage.setItem('prefered_theme', 'light-theme')
        theme = "light-theme"
    }else{
        localStorage.setItem('prefered_theme', 'dark-theme')
        theme = 'dark-theme'
    }
    document.body.classList.remove("light-theme", "dark-theme")
    document.body.classList.add(theme)
    
})