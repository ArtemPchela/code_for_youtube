// const emojis = ["😀", "😂", "😍", "😎", "🤩"];
// const emojis = ["🍕", "🍔", "🍟", "🌭"];

// const emojis = [
//   "👚",
//   "👕",
//   "👖",
//   "👗",
//   "👔",
//   "👙",
//   "👘",
//   "👠",
//   "👡",
//   "👢",
//   "🧥",
//   "🧣",
//   "🧤",
//   "🧦",
//   "🧢",
//   "🎩",
//   "👒",
// ];

const emojis = [
  '<i class="fa-brands fa-react"></i>',
  '<i class="fa-brands fa-node"></i>',
  '<i class="fa-brands fa-node-js"></i>',
  '<i class="fa-brands fa-js"></i>',
  '<i class="fa-brands fa-vuejs"></i>',
  '<i class="fa-brands fa-css3-alt"></i>',
  '<i class="fa-brands fa-angular"></i>',
];

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", (event) => {
    const { clientX: x, clientY: y } = event;
    // const x = event.clientX;
    // const y = event.clientY;

    const particle = document.createElement("div");
    particle.className = "particle";

    // particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    const size = Math.random() * 20 + 10;

    /**
     * we need to create constant with margin
     *
     * if we use the 'const margin', we need to write
     * particle.style.left = `${x - size / 2 + offsetX}px`;
     * particle.style.top = `${y - size / 2 + offsetY}px`;
     *
     * if without 'const margin', usual
     *
     * particle.style.left = `${x - size / 2}px`;
     * particle.style.top = `${y - size / 2}px`;
     * **/
    //we need to create constant with margin
    const margin = 70; //play with margin

    // Adjust the position of each particle to add margin
    const offsetX = (Math.random() - 0.5) * margin;
    const offsetY = (Math.random() - 0.5) * margin;

    particle.style.left = `${x - size / 2 + offsetX}px`;
    particle.style.top = `${y - size / 2 + offsetY}px`;

    // particle.style.left = `${x - size / 2}px`;
    // particle.style.top = `${y - size / 2}px`;
    particle.style.fontSize = `2rem`;
    particle.style.color = "white";
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    document.body.appendChild(particle);

    /**
     * initially we implemented with setTimeout
     * **/

    setTimeout(() => {
      particle.style.opacity = "0";
      particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px) scale(1)`;
    }, 0);

    /**
     * we can implement with getBoundingClientRect()
     * **/

    // particle.getBoundingClientRect();
    //
    // particle.style.opacity = "0";
    // particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
    //   Math.random() * 200 - 100
    // }px) scale(0.5)`;

    /**
     * we can implement with requestAnimationFrame()
     * ATTENTION. I didn't test it!!!
     * **/

    // requestAnimationFrame(() => {
    //   particle.style.opacity = "0";
    //   particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
    //     Math.random() * 200 - 100
    //   }px) scale(0.5)`;
    // });

    setTimeout(() => {
      particle.remove();
    }, 1500);
  });
});
