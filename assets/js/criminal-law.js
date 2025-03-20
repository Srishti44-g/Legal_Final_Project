
        document.addEventListener('DOMContentLoaded', function () {
            const themeSwitch = document.getElementById('themeSwitch');
            const body = document.body;

            themeSwitch.addEventListener('change', function () {
                if (this.checked) {
                    body.setAttribute('data-theme', 'dark');
                } else {
                    body.removeAttribute('data-theme');
                }
            });

            const menuToggle = document.getElementById('menuToggle');
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.getElementById('overlay');

            menuToggle.addEventListener('click', function () {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
            });

            overlay.addEventListener('click', function () {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });

            const expandableTriggers = document.querySelectorAll('.expandable-trigger');
            expandableTriggers.forEach(trigger => {
                trigger.addEventListener('click', function () {
                    this.classList.toggle('active');
                    const content = this.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        });
    