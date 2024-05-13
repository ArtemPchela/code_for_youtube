document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text");

  window.addEventListener("mousemove", function (e) {
    const rect = textElement.getBoundingClientRect();

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    textElement.style.textShadow = `
      ${offsetX / -20}px ${offsetY / -20}px 5px rgba(24, 143, 167, 0.5),
      ${offsetX / 12}px ${offsetY / 12}px 5px rgba(218, 44, 56, 0.3)
    `;
  })
})
