const icons = [
  { class: "fas fa-heart", color: "#ff0000", text: "Heart" },
  { class: "fas fa-star", color: "#00ff7b", text: "Star" },
  { class: "fas fa-moon", color: "#0059ff", text: "Moon" },
  { class: "fas fa-car", color: "#f70eff", text: "Car" },
  { class: "fas fa-bicycle", color: "#37ffca", text: "Bicycle" },
];

const container = document.getElementById("icon-container");

icons.forEach((icon) => {
  const wrapper = document.createElement("div");
  wrapper.className = "icon-wrapper";

  const i = document.createElement("i");
  i.className = icon.class;
  i.style.color = icon.color;

  const text = document.createElement("span");
  text.className = "icon-text";
  text.textContent = icon.text;
  text.style.color = icon.color;

  wrapper.appendChild(i);
  wrapper.appendChild(text);
  container.appendChild(wrapper);
});
