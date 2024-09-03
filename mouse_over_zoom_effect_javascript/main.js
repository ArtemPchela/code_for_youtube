const container = document.querySelector(".zoom-container");
const image = document.querySelector(".zoom-image");

container.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = container.getBoundingClientRect();

  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;

  image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
});
