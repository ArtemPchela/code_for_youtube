const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const threshold = 150;

const toTop = document.querySelector(".scroll_top");

const toggleScrollToTop = () => {
  // window.scrollY > threshold
  //   ? toTop.classList.add("visible")
  //   : toTop.classList.remove("visible");

  // toTop.classList.toggle("visible", window.scrollY > threshold);

  if (window.scrollY > threshold) {
    toTop.classList.add("visible");
  } else {
    toTop.classList.remove("visible");
  }
};

window.addEventListener("scroll", toggleScrollToTop);
window.addEventListener("click", scrollToTop);
