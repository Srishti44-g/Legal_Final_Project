document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            body.setAttribute('data-theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
        }
    });

    // Search functionality
    searchBar.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const terms = document.querySelectorAll('.card');
        terms.forEach(term => {
            const termText = term.textContent.toLowerCase();
            if (termText.includes(query)) {
                term.style.display = 'block';
            } else {
                term.style.display = 'none';
            }
        });
    });

    // Load terms dynamically (placeholder)
    function loadTerms() {
        const generalTerms = document.getElementById('general-terms');
        generalTerms.innerHTML = '<p>Example Term: Jurisdiction</p><p>Definition: The official power to make legal decisions and judgments.</p>';
        // Repeat for other sections
    }

    loadTerms();
}); 