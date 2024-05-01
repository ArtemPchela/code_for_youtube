document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".icon_js");

  const animateIcons = () => {
    const triggerIcon = (window.innerHeight / 5) * 4;

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerIcon) {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.2)";
      }
    });
  };

  window.addEventListener("scroll", animateIcons);
  animateIcons();
});
