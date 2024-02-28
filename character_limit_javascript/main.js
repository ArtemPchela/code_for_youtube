document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const sendMessage = document.getElementById("sendMessage");

  const maxLength = 50;

  const updateCharCount = () => {
    const currentLength = messageInput.value.length;

    charCount.textContent = `${currentLength}/${maxLength}`

    const isExceeded = currentLength > maxLength;

    charCount.classList.toggle("exceeded", isExceeded);

    messageInput.classList.toggle("exceeded", isExceeded);

    sendMessage.disabled = isExceeded;
  }

  messageInput.addEventListener("input", updateCharCount);

  updateCharCount()

})

