document.addEventListener("DOMContentLoaded", () => {
    const tabContainer = document.querySelector(".tab-container");
    const tabs = [...tabContainer.querySelectorAll(".tab")];
    const slider = tabContainer.querySelector(".slider");

    function moveSlider(tab) {
        slider.style.width = `${tab.offsetWidth}px`;
        slider.style.left = `${tab.offsetLeft}px`;
    }

    function handleTabClick(event) {
        const clickedTab = event.target.closest(".tab");
        if(!clickedTab) return;

        tabs.forEach((tab) => tab.classList.toggle("active", tab === clickedTab));

        moveSlider(clickedTab)
    }

    tabContainer.addEventListener("click", handleTabClick);

    moveSlider(tabContainer.querySelector(".tab.active"));
})