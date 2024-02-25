document.addEventListener("DOMContentLoaded", function () {
  const input =document.getElementById("search-input")
  const resultContainer =document.getElementById("result")

  let posts = [];

  function flySearch() {
    const searchQuery = input.value.trim().toLowerCase();

    if(searchQuery) {
      const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchQuery))
      displayResult(filteredPosts)
    } else {
      displayResult(posts)
    }
  }

  input.addEventListener("input", flySearch);

  function displayResult(posts) {
    if(posts.length > 0) {
      resultContainer.innerHTML = posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
      `).join("")
    } else {
      resultContainer.innerHTML = `<p class="no-result">No result found.</p>`
    }
  }

  async function fetchPosts() {
    try {
      resultContainer.innerHTML = '<p class="no-result">Loading posts...</p>'

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error("Network response not ok")
      }

      posts = await response.json()
      displayResult(posts)
    } catch (error) {
      resultContainer.innerHTML = `<p class="error">${error.message} fetching posts. Please try again later.</p>`
    }
  }

  fetchPosts();
})
