let lastScrollTop = 0;

const header = document.getElementById("header");
const content = document.querySelector(".content");

const hideThreshold = 150;

let headerHeight = header.offsetHeight;

function updateLayout() {
  content.style.marginTop = `${headerHeight}px`
}

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > hideThreshold) {
      header.style.top = `-${headerHeight}px`
    } else {
      header.style.top = "0"
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  false,
)

document.addEventListener("DOMContentLoaded", updateLayout);
window.addEventListener("resize", updateLayout);
