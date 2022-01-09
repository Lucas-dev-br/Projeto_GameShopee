// Open and close nav
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
    element.addEventListener("click", function() {
        nav.classList.toggle("show")
    })
} 

// Select menu item hidden nav
const links = document.querySelectorAll("nav ul li a");

for(const link of links) {
    link.addEventListener("click", function() {
        nav.classList.remove("show");
    })
}

// Scroll header change
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll () {

    if(window .scrollY >= (navHeight + 500)) {
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
}

// Testimonials
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
})

// ScrollReveal: Mostrar elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
})

scrollReveal.reveal(
`#home .text, #home .image, 
#abaout .image,#abaout .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
`, { interval: 200})

// Botão para voltar o top 

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    
    
    if(window.scrollY >= 500) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

// seção visivel no menu

const sections = document.querySelectorAll('main section[id]', 'footer section[id]')

function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector("nav ul li a[href*=" + sectionId + "]")
            .classList.add("active")
        } else {
            document
            .querySelector("nav ul li a[href*=" + sectionId + "]")
            .classList.remove("active")
        }

    }
}

// Quando rolar

window.addEventListener("scroll" , function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})


