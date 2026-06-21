document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <header id="navigation_bar" class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo.png" alt="Company Logo" id="company_logo" class="img-fluid">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation_links" aria-controls="navigation_links" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <nav id="navigation_links" class="collapse navbar-collapse justify-content-end">
                    <div class="navbar-nav align-items-md-center">
                        <a class="nav-link" href="index.html">Home</a>
                        <a class="nav-link" href="tasks.html">Tasks</a>
                        <a class="nav-link" href="services.html">Services</a>
                        <a class="nav-link" href="about.html">About</a>
                        <a class="nav-link" href="contact.html">Contact</a>
                        <button id="dark_mode_toggle" class="btn btn-outline-secondary ms-md-3 mt-2 mt-md-0">Toggle Dark Mode</button>
                    </div>
                </nav>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const footerHTML = `
        <footer id="page_footer">
            <p>&copy; 2026 TechNest. All rights reserved.</p>
            <p id="footer_links">
                <a href="mailto:support@technest.com">support@technest.com</a> |
                <a href="https://www.facebook.com/TechNest" target="_blank" rel="noopener">Facebook</a> |
                <a href="https://www.twitter.com/TechNest" target="_blank" rel="noopener">Twitter</a> |
                <a href="https://www.instagram.com/TechNest" target="_blank" rel="noopener">Instagram</a>
            </p>
        </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);

    const toggleBtn = document.getElementById("dark_mode_toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const logo = document.getElementById("company_logo");
            logo.src = document.body.classList.contains("dark-mode") ? "assets/images/logo-dark-mode.png" : "assets/images/logo.png";
        });
    }
});
