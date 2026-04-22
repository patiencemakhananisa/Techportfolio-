/*  MENU TOGGLE  */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/* Close menu when a nav link is clicked (mobile UX fix) */

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


/*  SCROLL HANDLER  */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

let ticking = false;

function handleScroll() {
    let top = window.scrollY;


    header.classList.toggle('sticky', top > 100);

    /* Active Section Highlight */
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (targetLink) targetLink.classList.add('active');
        }
    });

    /* Auto-close mobile menu on scroll */
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* Throttled scroll (performance safe) */

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});


/*  SCROLL REVEAL  */

if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1800,
        delay: 100,
        reset: false
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });

    sr.reveal(
        '.home-img, .services-container, .projects-box, .cert-box, .contact form',
        { origin: 'bottom', interval: 120 }
    );

    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
}


/*  TYPED TEXT  */

if (typeof Typed !== "undefined") {
    new Typed('.multiple-text', {
        strings: [
            'Frontend Developer',
            'UI/UX Designer',
            'Problem Solver',
            'Scalable Designer',
            'App Developer'

        ],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1200,
        loop: true
    });
}


/*  SKILLS ANIMATION  */

const skillsSection = document.querySelector('#skills');

if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
            } else {
                entry.target.classList.remove('show-animate');
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
}


/*  SECTION FADE-IN  */

const allSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

allSections.forEach(sec => sectionObserver.observe(sec));


/*   SCROLL SMOOTH  */

document.querySelector('.footer-iconTop a')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});