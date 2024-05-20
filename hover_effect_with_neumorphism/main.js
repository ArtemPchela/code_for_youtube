document.querySelectorAll(".btn").forEach((button) => {
  const icon = button.querySelector("i");

  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = (x - centerX) / 5;
    const offsetY = (y - centerY) / 5;
    const oppositeSideX = -offsetX;
    const oppositeSideY = -offsetY;
    button.style.boxShadow = `
      ${oppositeSideX}px ${oppositeSideY}px 30px #fff, 
      ${oppositeSideX}px ${oppositeSideY}px 30px rgba(174, 174, 192, 0.3), 
      inset ${oppositeSideX}px ${oppositeSideY}px 10px rgba(174, 174, 192, 0.2), 
      inset ${oppositeSideX}px ${oppositeSideY}px 10px #fffa`;
    icon.style.textShadow = `${oppositeSideX}px ${oppositeSideY}px 3px #000000`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = `var(--box-shadow)`;
    icon.style.textShadow = `var(--icon-shadow)`;
  });
});
