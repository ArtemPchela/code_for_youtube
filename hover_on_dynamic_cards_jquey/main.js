$(function () {
  const url = "https://api.randomuser.me/?nat=US&results=10";

  $.getJSON(url)
    .done(function (data) {
      const users = data.results;
      const userCardsContainer = $("#userCardsContainer");

      function createUserCard(user) {
        return `
          <div class="user-card">
            <div class="user-poster">
                <img src="${user.picture.large}" alt="${user.picture.large}">
            </div>
            
            <div class="user-details">
              <div class="user-picture">
                  <img src="${user.picture.thumbnail}" alt="${user.picture.thumbnail}">
              </div>
              <h3>${user.name.first} ${user.name.last}</h3>
              <p>${user.email}</p>
              <p class="user-location">${user.location.city}, ${user.location.state}</p>
            </div>
          </div>
        `;
      }

      const userCards = users.map(createUserCard).join("");
      userCardsContainer.append(userCards);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching user data:", textStatus, errorThrown);
    });
});
