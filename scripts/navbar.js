document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <header id="navigation_bar">
            <img src="assets/images/logo.png" alt="Company Logo" id="company_logo">
            <nav id="navigation_links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <button id="dark_mode_toggle">Toggle Dark Mode</button>
            </nav>
        </header>
    `;
    
    // Insert the navbar at the very beginning of the <body>
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const footerHTML = `
        <footer id="page_footer">
            <p>&copy; 2026 TechNest. All rights reserved.</p>
        </footer>
    `;

    // Insert the footer at the very end of the <body>
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // Wire up the dark mode toggle button
    const toggleBtn = document.getElementById("dark_mode_toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});
