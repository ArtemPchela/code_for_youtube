function generateCaptcha() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";

  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return captcha;
}

document.addEventListener("DOMContentLoaded", () => {
  const captchaText = document.querySelector(".captcha-text");
  const captchaInput = document.querySelector(".captcha-input");
  const submitButton = document.querySelector(".captcha-submit");
  const resultMessage = document.querySelector(".result-message");

  let currentCaptcha = generateCaptcha();
  captchaText.textContent = currentCaptcha;

  submitButton.addEventListener("click", () => {
    const userInput = captchaInput.value;

    if (userInput === currentCaptcha) {
      resultMessage.textContent = "CAPTCHA verified successfully!";
      resultMessage.style.color = "lightgreen";
    } else {
      resultMessage.textContent = "CAPTCHA verification failed. Try again.";
      resultMessage.style.color = "lightcoral";

      currentCaptcha = generateCaptcha();
      captchaText.textContent = currentCaptcha;
    }

    captchaInput.value = "";
  });
});
