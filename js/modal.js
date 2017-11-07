var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".add-to-cart");
var buttonAdd = document.querySelector(".add-to-cart__btn");
var chekedRadio = document.querySelectorAll(".add-to-cart__label")[0];

buttonAdd.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

if (location.pathname === "/index.html" || location.pathname === "/") {
  var openPopupBtn = document.querySelector(".product__btn");
  openPopupBtn.addEventListener("click", openPopup);

} else if (location.pathname === "/catalog.html") {
  var openModalBtn = document.querySelectorAll(".goods__add-to-cart");

    for (var i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener("click", openPopup);
  }
}

function openPopup (evt) {
  evt.preventDefault();
  var overlay = document.querySelector(".overlay");
  overlay.classList.add("overlay--opened");
  popup.classList.add("add-to-cart--opened");
  chekedRadio.focus();
}

function closePopup (evt) {
  evt.preventDefault();
  var overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay--opened");
  popup.classList.remove("add-to-cart--opened");
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("add-to-cart")) {
      popup.classList.remove("add-to-cart--opened");
      overlay.classList.remove("overlay--opened");
    }
  }
});
