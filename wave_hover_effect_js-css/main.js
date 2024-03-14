const buttonColors = [
  "rgba(68,243,68,0.5)",
  "rgba(46,255,255,0.5)",
  "rgba(220,53,69,0.5)",
  "rgba(53,120,220,0.5)",
  "rgba(220,198,53,0.5)",
  "rgba(220,53,167,0.5)",
];

const createWaveEffect = (event) => {
  event.preventDefault();

  const button = event.currentTarget;

  const waveColor = getComputedStyle(button)
    .getPropertyValue("--wave-color")
    .trim();

  for (let i = 0; i < 3; i++) {
    const { left, top, width, height } = button.getBoundingClientRect();

    const waveDiameter = Math.max(width, height) * (i + 0.5);

    const waveRadius = waveDiameter / 2;

    const waveX = event.clientX - left - waveRadius;
    const waveY = event.clientY - top - waveRadius;

    const wave = document.createElement("span");
    wave.classList.add("wave");

    wave.style.width = `${waveDiameter}px`;
    wave.style.height = `${waveDiameter}px`;

    wave.style.left = `${waveX}px`;
    wave.style.top = `${waveY}px`;

    wave.style.animation = `wave-animation 1.2s linear ${i * 0.1}s forwards`;

    wave.style.backgroundColor = waveColor;

    button.appendChild(wave);

    setTimeout(() => wave.remove(), (1.2 + i * 0.1) * 1000);
  }
};

document.querySelectorAll(".waveButton").forEach((button, index) => {
  const colorIndex = index % buttonColors.length;

  button.style.setProperty("--wave-color", buttonColors[colorIndex]);

  button.addEventListener("mouseover", createWaveEffect);
  button.addEventListener("click", createWaveEffect);
});
