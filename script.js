// Smooth scroll for navigation links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animation for content sections
function handleScrollAnimation() {
    const contentSections = document.querySelectorAll('.content-section');
    
    contentSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Wenn der Bereich sichtbar ist (zwischen Top und Bottom des Viewports)
        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.classList.add('scroll-animate');
        }
    });
}

// Scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

// Initial call on page load
handleScrollAnimation();






