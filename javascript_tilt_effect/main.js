document.querySelectorAll(".card").forEach((card) => {
  const imageUrl = card.dataset.imageUrl;
  card.querySelector(".card-image").style.backgroundImage = `url(${imageUrl})`;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    card.style.transform = `perspective(1000px) rotateY(${deltaX * 20}deg)
        rotateX(${-deltaY * 20}deg) translateZ(20px)
    `;

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateY(0)
        rotateX(0) translateZ(0)`;
    });
  });
});
