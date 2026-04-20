const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 60));
document.getElementById("hamburger").addEventListener("click", () => document.getElementById("nav-links").classList.toggle("open"));
function buyProduct(name) {
  const msg = encodeURIComponent("Hola! Me interesa: " + name);
  window.open("https://wa.me/5491100000000?text=" + msg, "_blank");
}
