const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
