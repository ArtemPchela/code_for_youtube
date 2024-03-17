const navBar = document.querySelector(".navbar");
const navIcon = document.querySelector(".hamburger_menu");
const navLinks = document.querySelectorAll("a");
navIcon.addEventListener("click", () => {
  navBar.classList.toggle("change");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("change");
  });
});

document.addEventListener("click", (e) => {
  if (
    !navBar.contains(e.target) &&
    !navIcon.contains(e.target) &&
    navBar.classList.contains("change")
  ) {
    navBar.classList.remove("change");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navBar.classList.contains("change")) {
    navBar.classList.remove("change");
  }
});
