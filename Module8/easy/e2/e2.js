window.addEventListener('DOMContentLoaded', () => {
const lazyImages = document.querySelectorAll('.lazy-image')

const imageObserver = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let img = entry.target

            img.src = img.getAttribute('data-src')
            img.classList.remove('lazy-image')

            observer.unobserve(img)
        }
    })
}, {
     threshold: 0.1,
     rootMargin: '100px 0px'
})

lazyImages.forEach(img => imageObserver.observe(img))
});


