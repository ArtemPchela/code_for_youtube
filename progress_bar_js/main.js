document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progressBar")
  const progress = document.getElementById("progress")

  function updatedScrollProgress() {
    if(!progressBar || !progress) {
      return;
    }

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;

    const scrolledPercentage = (winScroll / height) * 100

    progressBar.style.width = `${scrolledPercentage}%`

    if(scrolledPercentage > 0) {
      progress.innerText = `${scrolledPercentage.toFixed(0)}%`
    }else {
      progress.innerText = ""
    }

  }

  window.onscroll = updatedScrollProgress;
})
