const header = document.querySelector(".header");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll("nav a");

const addActiveClass = () => {
  let scrollPosition = document.documentElement.scrollTop + header.offsetHeight;

  for (const section of sections) {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < top + height) {
      header.style.backgroundColor = getComputedStyle(section).backgroundColor;

      links.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(`nav a[href='#${section.id}']`);

      if (activeLink) {
        activeLink.classList.add("active");
      }

      break;
    }
  }
};

window.addEventListener("scroll", addActiveClass);
