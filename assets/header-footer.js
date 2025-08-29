document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    headerPlaceholder.innerHTML = `
        <header>
            <a href="/"><img src="/images/bloofy-logo.png" alt="Bloofy Logo"></a>
            <nav>
                <a href="/about">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    `;

    footerPlaceholder.innerHTML = `
        <footer>
            <p>&copy; 2025 Bloofy. All rights reserved.</p>
        </footer>
    `;
});