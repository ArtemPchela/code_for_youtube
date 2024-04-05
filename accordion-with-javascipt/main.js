document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector(".accordion");

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      const posts = response.data;

      posts.forEach((post) => {
        const item = document.createElement("div");
        item.classList.add("accordion-item");

        const title = document.createElement("div");
        title.classList.add("accordion-title");

        title.innerHTML = `
          ${post.title}
          <span class="icon bi bi-plus-circle"></span>
        `;

        item.appendChild(title)

        const content = document.createElement("div");
        content.classList.add("accordion-content");
        content.innerHTML = `
          <div class="accordion-content_sub">${post.body}</div>
        `
        item.appendChild(content)
        accordion.appendChild(item)

        title.addEventListener("click", function () {
          const isOpen = item.classList.contains("open");

          accordion.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("open");

            const panel = item.querySelector(".accordion-content");
            panel.style.maxHeight = null;

            const icon = item.querySelector(".icon");
            icon.classList.remove("bi-dash-circle");
            icon.classList.add("bi-plus-circle");
          });

          if(!isOpen) {
            item.classList.add("open");

            const panel = item.querySelector(".accordion-content");
            panel.style.maxHeight = `${panel.scrollHeight}px`;

            const icon = item.querySelector(".icon");
            icon.classList.remove("bi-plus-circle");
            icon.classList.add("bi-dash-circle");
          }
        })
      })
    })
    .catch((error) => console.error("Error fetching data:", error));
})
