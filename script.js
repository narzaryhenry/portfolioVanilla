const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

// Toggle menu
menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("fa-times");
});

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menu.classList.remove("fa-times");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("active");
    menu.classList.remove("fa-times");
  }
});
