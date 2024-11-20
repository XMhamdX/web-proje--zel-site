// script.js
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const heroContent = document.querySelector('.hero-content');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            heroContent.style.transform = `translateY(-${scrollPosition / 3}px)`;
            heroContent.style.opacity = 1 - scrollPosition / 500;
        } else {
            heroContent.style.transform = 'translateY(0)';
            heroContent.style.opacity = 1;
        }
    });
});
