var mapLink = document.querySelector(".map-js");
var mapPopup = document.querySelector(".modal-2");
var mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});


mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });