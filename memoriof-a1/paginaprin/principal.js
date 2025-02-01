document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    // Alternar visibilidad del menú
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // Si el scroll supera los 50px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".main-header");
    const navLinks = document.querySelector(".nav-links");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            navLinks.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
            navLinks.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-section");

    // Animación de fondo en el Hero Section
    let scrollOffset = 0;
    window.addEventListener("scroll", () => {
        scrollOffset = window.scrollY * 0.5;
        heroSection.style.backgroundPosition = `center ${scrollOffset}px`;
    });
});
