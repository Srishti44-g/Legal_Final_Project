// Theme switcher functionality
const themeSwitch = document.querySelector('.theme-switch input');
const body = document.querySelector('body');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (themeSwitch) {
        themeSwitch.checked = savedTheme === 'dark';
    }
}

themeSwitch?.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Navigation dropdown functionality
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.nextElementSibling?.classList.contains('nav-dropdown')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = link.nextElementSibling;
            const arrow = link.querySelector('.arrow');
            
            // Close other dropdowns
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove('active');
                    const otherDropdown = otherLink.nextElementSibling;
                    const otherArrow = otherLink.querySelector('.arrow');
                    if (otherDropdown?.classList.contains('nav-dropdown')) {
                        otherDropdown.classList.remove('show');
                        if (otherArrow) {
                            otherArrow.style.transform = 'rotate(0deg)';
                        }
                    }
                }
            });
            
            // Toggle current dropdown
            link.classList.toggle('active');
            dropdown.classList.toggle('show');
            if (arrow) {
                arrow.style.transform = dropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnMenuToggle = menuToggle.contains(e.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
}); 