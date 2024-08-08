// hamburger icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    

    // stick hamburger

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and hamburger

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

// scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-details-container', {origin: 'top'});
ScrollReveal().reveal('.portfolio-container', {origin: 'bottom'});

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Software Automation Engineer', 'Computer Science Student', ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})