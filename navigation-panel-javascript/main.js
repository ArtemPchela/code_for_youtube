document.addEventListener("DOMContentLoaded", function () {
  const icons = [
    "behance",
    "bootstrap",
    "alarm",
    "apple",
    "twitter",
    "android",
    "google",
    "activity"
  ];

  const navList = document.querySelector(".nav-list");

  icons.forEach((icon) => {
    const li = document.createElement("li");

    li.className = "nav-item";

    const a = document.createElement("a");

    a.href = "#";
    a.className = "nav-link";

    a.innerHTML = `<i class="bi bi-${icon} icon-style"></i>`;

    a.setAttribute(
      "data-tooltip",
      icon.charAt(0).toUpperCase() + icon.slice(1),
      );

    li.appendChild(a);
    navList.appendChild(li);
  })
})
