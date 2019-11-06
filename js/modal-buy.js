var buyPopup = document.querySelector(".modal-3");
var buyLinks = document.querySelectorAll(".buy-js")
var buyClose = buyPopup.querySelector(".buy-close");

buyLinks.forEach(function(link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        buyPopup.classList.add("modal-show");
    });
});


buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
  });