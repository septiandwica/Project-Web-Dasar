// nav toggle
const navToggle = document.querySelector('.nav-toggle input');
const nav = document.querySelector('nav ul');

navToggle.addEventListener('click', function(){
    nav.classList.toggle('menu');
});

// active navbar
const selectNav = document.querySelectorAll('li a');
selectNav.forEach(a => {
    a.addEventListener("click",()=>{
        resetselectNav();
        a.classList.add("active");
    })
});
function resetselectNav() {
    selectNav.forEach(a => {
        a.classList.remove("active"); 
    });
}
//typing text
var typed = new Typed('.typing-txt', {
    strings: ["Mudah...", "Gratis...", "Bersertifikat..."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

var typed = new Typed('.typing-txt2', {
    strings: ["Mudah di Akses.","Gratis!!", "Bersertifikat!!"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Slider
const wrapper = document.querySelector('.review-wrapper');
const slider = [...document.querySelectorAll('.slider button')];

let currentReview = 0;
slider.forEach((item, i) => {
    item.addEventListener('click', () => {
        slider[currentReview].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentReview = i;
    })
});

// smothscroll
let scroll = new SmoothScroll('a[href*="#"', {
    speed: 900,
    speedAsDuration: true
});




