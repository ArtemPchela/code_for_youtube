$(document).ready(function () {

  $.get("https://jsonplaceholder.typicode.com/users", function (post) {
    post.forEach(function (item) {
      const accordionItem = $("<div class='accordion-item'></div>");

      const accordionHeader = $("<div class='accordion-header'></div>");
      const title = $(`<div class='accordion-title'>${item.name}</div>`);
      const arrowIcon = $("<i class='bi bi-chevron-down'></i>");

      accordionHeader.append(title, arrowIcon)
      accordionItem.append(accordionHeader)

      const accordionContent = $(`<div class='accordion-content'></div>`);
      const accordionBody = $(`<div class='accordion-body'>
            <p>${item.email}</p>
        </div>`);
      accordionContent.append(accordionBody);
      accordionItem.append(accordionContent);

      $(".accordion").append(accordionItem)
    })
  })

  $(document).on("click", ".accordion-header", function (event) {
    const $accordionHeader = $(event.currentTarget);
    const $accordionContent = $accordionHeader.next(".accordion-content");

    $accordionHeader.toggleClass("active");

    $accordionHeader.find("i").toggleClass("bi-chevron-down bi-chevron-up")

    $accordionContent.slideToggle();

    $(".accordion-header")
      .not($accordionHeader)
      .removeClass("active")
      .find("i")
      .removeClass("bi-chevron-up")
      .addClass("bi-chevron-down")
      .end()
      .next(".accordion-content")
      .slideUp();
  })
})
