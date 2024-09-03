document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".text");
  const text = textElement.textContent.split("");

  textElement.innerHTML = text.map((char) => `<span>${char}</span>`).join("");

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const spanElements = shuffleArray(
    Array.from(textElement.querySelectorAll("span")),
  );

  let i = 0;

  const interval = setInterval(() => {
    spanElements[i++].classList.add("text-effect");
    if (i === spanElements.length) clearInterval(interval);
  }, 10);
});
