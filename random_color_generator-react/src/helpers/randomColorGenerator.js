export const getRandomColor = () => {
  const randomColorNumber = Math.floor(Math.random() * 16777215);

  const hexColor = randomColorNumber.toString(16).padStart(6, "0");

  return "#" + hexColor;
};
