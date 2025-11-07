document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('nav a');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const htmlTag = document.documentElement;

    // Check for saved theme in localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlTag.classList.add('dark');
        moonIcon.style.display = 'block';
    } else {
        htmlTag.classList.remove('dark');
        sunIcon.style.display = 'block';
    }

    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', () => {
        if (htmlTag.classList.contains('dark')) {
            htmlTag.classList.remove('dark');
            localStorage.theme = 'light';
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            htmlTag.classList.add('dark');
            localStorage.theme = 'dark';
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    });

    // Mobile menu functionality
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }

            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetId = button.id.replace('-tab', '-content');
            tabContents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

