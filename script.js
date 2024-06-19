document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        if (burger && nav && navLinks) {
            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
                    }
                });

                burger.classList.toggle('toggle');
            });
        } else {
            console.error('One or more elements not found in the DOM');
        }
    };

    navSlide();
});