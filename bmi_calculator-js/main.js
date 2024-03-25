const calculateBtn = document.querySelector("button");

const calculateBMI = () => {
  const weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  const result = document.getElementById("result");

  height = height / 100;

  let bmi = weight / (height * height);

  bmi = bmi.toFixed(2)

  if(!weight || !height) {
    result.innerText = "Please enter values for weight and height.";
    result.style.color = "red";
  } else {
    let bmiCategory;

    switch (true) {
      case bmi < 18.49:
        bmiCategory = "Underweight";
        break;
      case bmi >= 18.5 && bmi <= 24.9:
        bmiCategory = "Normal weight";
        break;
      case bmi >= 25 && bmi <= 29.9:
        bmiCategory = "Overweight";
        break;
      default:
        bmiCategory = "Obesity";
    }

    result.style.color = "#333333";
    result.innerText = `Your BMI is ${bmi}. Category: ${bmiCategory}`;
  }
}

calculateBtn.addEventListener("click", calculateBMI);
