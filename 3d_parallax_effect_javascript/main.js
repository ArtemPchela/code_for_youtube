const card = document.querySelector(".card");

let animationFrameId;

const updateCard = (event) => {
  const rect = card.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 25;
  const rotateY = ((x - centerX) / centerX) * 25;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg) scale(1.1)`;
  card.style.transition = "transform 2s cubic-bezier(.05, .99, .55, .97)";
};

const onMouseMove = (event) => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  animationFrameId = requestAnimationFrame(() => updateCard(event));
};

card.addEventListener("mousemove", (event) => {
  onMouseMove(event);
});

const onMouseLeave = () => {
  card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
};

card.addEventListener("mouseleave", onMouseLeave);
