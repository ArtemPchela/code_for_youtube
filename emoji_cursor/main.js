// const emojis = ["😀", "😂", "😍", "😎", "🤩"];
// const emojis = ["🍕", "🍔", "🍟", "🌭"];

const emojis = [
  "👚",
  "👕",
  "👖",
  "👗",
  "👔",
  "👙",
  "👘",
  "👠",
  "👡",
  "👢",
  "🧥",
  "🧣",
  "🧤",
  "🧦",
  "🧢",
  "🎩",
  "👒",
];

// const emojis = [
//   '<i class="fa-brands fa-react"></i>',
//   '<i class="fa-brands fa-node"></i>',
//   '<i class="fa-brands fa-node-js"></i>',
//   '<i class="fa-brands fa-js"></i>',
//   '<i class="fa-brands fa-vuejs"></i>',
//   '<i class="fa-brands fa-css3-alt"></i>',
//   '<i class="fa-brands fa-angular"></i>',
// ];

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", (event) => {
    const { clientX: x, clientY: y } = event;
    // const x = event.clientX;
    // const y = event.clientY;

    const particle = document.createElement("div");
    particle.className = "particle";

    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    // particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    const size = Math.random() * 2 + 1;

    particle.style.left = `${x - size / 2}px`;
    particle.style.top = `${y - size / 2}px`;
    particle.style.fontSize = "0.45rem";
    particle.style.color = "white";
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.opacity = "0";
      particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px) scale(1)`;
    }, 0);

    setTimeout(() => {
      particle.remove();
    }, 2500);
  });
});
