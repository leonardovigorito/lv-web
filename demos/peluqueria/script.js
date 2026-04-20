const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 60));
document.getElementById("hamburger").addEventListener("click", () => document.getElementById("nav-links").classList.toggle("open"));
