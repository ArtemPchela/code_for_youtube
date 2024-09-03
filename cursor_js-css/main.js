document.addEventListener("DOMContentLoaded", () => {
  let cursor = document.querySelector(".cursor");

  const updateCursorVisibility = (visible) => {
    cursor.style.opacity = visible ? "1" : "0";
  };

  document.addEventListener("mouseenter", () => updateCursorVisibility(true));
  document.addEventListener("mouseleave", () => updateCursorVisibility(false));

  document.addEventListener("mousemove", (event) => {
    cursor.style.top = `${event.clientY - cursor.offsetHeight / 2}px`;
    cursor.style.left = `${event.clientX - cursor.offsetWidth / 2}px`;
  });
});
