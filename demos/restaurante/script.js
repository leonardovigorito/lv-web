const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 60));
document.getElementById("hamburger").addEventListener("click", () => document.getElementById("nav-links").classList.toggle("open"));
function showTab(name) {
  document.querySelectorAll(".menu-grid").forEach(g => g.classList.add("hidden"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("tab-" + name).classList.remove("hidden");
  event.target.classList.add("active");
}
