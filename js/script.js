const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, 
};

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const currentSectionId = entry.target.id;

            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            document.querySelector(`nav ul li a[href="#${currentSectionId}"]`).classList.add('active');
        }
    });
};


const observer = new IntersectionObserver(callback, options);


sections.forEach((section) => {
    observer.observe(section);
});

const hamburger = document.querySelector('.hamburger');
const hmenu = document.querySelector('.h-menu');
const option = document.querySelectorAll('.option');

hmenu.style.transform = 'translateY(-120%)';

option.forEach(item => {
    item.addEventListener('click', () => {
        hmenu.style.transform = 'translateY(-120%)';
    })
});

hamburger.addEventListener('click', () => {
    hmenu.style.transform = hmenu.style.transform === 'translateY(-120%)' ? 'translateY(0)' : 'translateY(-120%)';
});

