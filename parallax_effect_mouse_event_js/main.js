function transitionCalc(start, end, amount) {
  return (1 - amount) * start + amount * end;
}

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

const frameRate = 0.1 //0.1 to 1

const parallaxCard = document.querySelector(".parallax-card");
const parallaxImage = document.querySelector(".parallax-image");

function updatePosition(e, rect) {
  const x = (e.clientX !== undefined ? e.clientX : e.touches[0].clientX) - rect.left
  const y = (e.clientY !== undefined ? e.clientY : e.touches[0].clientY) - rect.top

  targetX = ((x - rect.width / 2) / rect.width) * 50;
  targetY = ((y - rect.height / 2) / rect.height) * 50;
}

parallaxCard.addEventListener("touchmove", (e) => {
    e.preventDefault();
    let rect = e.target.getBoundingClientRect();
    updatePosition(e, rect)
  }, {passive: false}
);

parallaxCard.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  updatePosition(e, rect);
});

(function update() {
  currentY = transitionCalc(currentY, targetY, frameRate);
  currentX = transitionCalc(currentX, targetX, frameRate);

  parallaxImage.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(update);
})();
