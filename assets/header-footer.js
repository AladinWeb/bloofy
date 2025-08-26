document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    headerPlaceholder.innerHTML = `
        <header>
            <a href="/"><img src="/images/bloofy-logo.png" alt="Bloofy Logo"></a>
            <nav>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    `;

    footerPlaceholder.innerHTML = `
        <footer>
            <div style="display: flex; justify-content: space-between; background-color: #1a2a44; color: #fff; padding: 20px;">
                <div>
                    <h3 style="margin: 0 0 10px;">Bloofy</h3>
                    <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                        <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" style="width: 20px;"></a>
                        <a href="#"><img src="/images/x-icon.png" alt="X" style="width: 20px;"></a>
                        <a href="#"><img src="/images/youtube-icon.png" alt="YouTube" style="width: 20px;"></a>
                        <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" style="width: 20px;"></a>
                        <a href="#"><img src="/images/linkedin-icon.png" alt="LinkedIn" style="width: 20px;"></a>
                    </div>
                    <p style="margin: 0;">Bloofy delivers cutting-edge insights and innovative solutions to empower businesses worldwide in the digital era. Managed by AllWorld SEO, our Bulacan-based team supports clients locally and internationally.</p>
                </div>
                <div>
                    <h3 style="margin: 0 0 10px;">Useful Links</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li><a href="#" style="color: #fff; text-decoration: none;">About</a></li>
                        <li><a href="#" style="color: #fff; text-decoration: none;">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 style="margin: 0 0 10px;">Contact Us</h3>
                    <form style="display: flex; flex-direction: column; gap: 10px;">
                        <input type="text" placeholder="Name" style="padding: 5px;">
                        <input type="email" placeholder="Email" style="padding: 5px;">
                        <textarea placeholder="Message" style="padding: 5px; height: 60px;"></textarea>
                        <button type="submit" style="padding: 5px; background-color: #007bff; color: #fff; border: none; cursor: pointer;">Send</button>
                    </form>
                </div>
            </div>
            <p style="text-align: center; background-color: #1a2a44; color: #fff; padding: 10px 0; margin: 0;">&copy; 2025 Bloofy. All rights reserved. Managed by AllWorld SEO.</p>
        </footer>
    `;
});