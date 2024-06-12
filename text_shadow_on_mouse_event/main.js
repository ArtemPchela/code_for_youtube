document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text");

  window.addEventListener("mousemove", function (e) {
    const rect = textElement.getBoundingClientRect();

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    textElement.style.textShadow = `
      ${offsetX / 12}px ${offsetY / 12}px 5px #EA9E8D,
      ${offsetX / 6}px ${offsetY / 6}px 5px #DAEFB3,
      ${offsetX / 12}px ${offsetY / -12}px 5px #84ACCE,
      ${offsetX / -6}px ${offsetY / -6}px 5px #C5AFA4
    `;
  })
})

// document.addEventListener("DOMContentLoaded", function () {
//   const textElements = document.querySelectorAll(".text"); // Select all elements with class 'viral-text'
//   const maxShadowDistance = 50; // Maximum distance the shadow can move in pixels
//
//   window.addEventListener("mousemove", function (e) {
//     textElements.forEach((item) => {
//       const rect = item.getBoundingClientRect();
//       let offsetX = e.clientX - (rect.left + rect.width / 2); // X position relative to element center
//       let offsetY = e.clientY - (rect.top + rect.height / 2); // Y position relative to element center
//
//       offsetX = Math.min(
//         Math.max(offsetX / 10, -maxShadowDistance),
//         maxShadowDistance,
//       );
//       offsetY = Math.min(
//         Math.max(offsetY / 10, -maxShadowDistance),
//         maxShadowDistance,
//       );
//
//       item.style.textShadow = `
//                 ${offsetX}px ${offsetY}px 5px rgba(0,0,0,0.3),
//                 ${offsetX * 1.2}px ${offsetY * 1.2}px 10px rgba(0,0,0,0.5),
//                 ${offsetX * 4}px ${offsetY * 4}px 15px rgba(0,0,0,0.5)
//             `;
//     });
//   });
// });
