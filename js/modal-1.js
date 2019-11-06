var link = document.querySelector(".button-js");
var popup = document.querySelector(".modal-1");
var close = popup.querySelector(".close")


link.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });