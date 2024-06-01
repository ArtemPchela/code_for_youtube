// document.addEventListener("mousemove", (event) => {
//   const x = event.clientX;
//   const y = event.clientY;
//   const size = Math.random() * 25 + 1;
//
//   const particle = document.createElement("div");
//   particle.className = "particle";
//
//   particle.style.width = `${size}px`;
//   particle.style.height = `${size}px`;
//   particle.style.left = `${x - size / 2}px`;
//   particle.style.top = `${y - size / 2}px`;
//
//   document.body.appendChild(particle);
//
//   setTimeout(() => {
//     particle.style.opacity = "0";
//     particle.style.transform = `
//       translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)
//       scale(0.9)
//     `;
//   }, 2);
//
//   setTimeout(() => {
//     particle.remove();
//   }, 1000);
// });

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  for (let i = 0; i < 3; i++) {
    const size = Math.random() * 25 + 1;

    const particle = document.createElement("div");
    particle.className = "particle";

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x - size / 2}px`;
    particle.style.top = `${y - size / 2}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.opacity = "0";
      particle.style.transform = `
        translate(${Math.random() * 200 - 100}px, ${
          Math.random() * 200 - 100
        }px)
        scale(0.9)
      `;
    }, 0); // Delay the start of the opacity transition

    setTimeout(() => {
      particle.remove();
    }, 1000); // Increase the duration before removal
  }
});
