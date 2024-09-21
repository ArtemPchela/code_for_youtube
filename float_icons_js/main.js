// import { icons } from "./icons.js";
import { emojis } from "./emojis.js";

const ICONS_AMOUNT = 70;
const ICONS_SIZE = 75;

function createShape() {
  const shape = document.createElement("div");
  shape.classList.add("shape");

  const size = Math.random() * `${ICONS_SIZE}` + 10;
  shape.style.fontSize = `${size}px`;

  shape.style.left = `${Math.random() * 100}%`;
  shape.style.top = `${Math.random() * 100}%`;

  shape.style.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  shape.style.animation = `float ${Math.random() * 6 + 4}s infinite`;

  // shape.innerText = "Go";

  // const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  const randomEmojis = emojis[Math.floor(Math.random() * emojis.length)];
  shape.innerText = randomEmojis;
  // shape.innerHTML = `<i class="fas ${randomIcon}"></i>`;
  return shape;
}

function addShapes(num) {
  const shapesContainer = document.getElementById("shapes");

  for (let i = 0; i < num; i++) {
    shapesContainer.appendChild(createShape());
  }
}

addShapes(ICONS_AMOUNT);
