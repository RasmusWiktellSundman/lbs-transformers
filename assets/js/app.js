// Hanterar bakgrundsfärg av meny, när användaren scrollar ner/upp
const options = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 1
}
const navbar = document.querySelector('header nav');
let atTop = false;
const observer = new IntersectionObserver((entries, observer) => {
    // Finns endast en entry, då endast top observeras.
    console.log("Hi");
    if(entries[0].isIntersecting) {
        navbar.classList.remove('background');
        atTop = true;
    }
    else {
        navbar.classList.add('background');
        atTop = false;
    }
}, options);


const topOfPage = document.querySelector('#top');
observer.observe(topOfPage);

//Navbar
let navButton = document.getElementById("nav-toggle");
let navUl = document.querySelector('header .links');
let nav = document.querySelector("header nav")
navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navButton.classList.toggle('close');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        navUl.classList.add('hide-on-mobile');
        nav.classList.remove('open');
        navButton.classList.remove('close');
    });
});
