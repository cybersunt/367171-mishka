  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });

// Модальное окно
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

// Слайдер
var sliderItem = document.getElementsByClassName("slider__item");
var prevSlide = document.querySelector(".reviews__prev");
var nextSlide = document.querySelector(".reviews__next");

nextSlide.addEventListener("click", showNextSlide);
prevSlide.addEventListener("click", showPrevSlide);


function showNextSlide() {
  for (var i = 0; i < sliderItem.length; i++) {

    if (i === sliderItem.length - 1) {
      sliderItem[i].classList.add("slider__item--hidden");
      sliderItem[0].classList.remove("slider__item--hidden");
      break;
    } else if (!sliderItem[i].classList.contains("slider__item--hidden")) {
      sliderItem[i].classList.add("slider__item--hidden");
      sliderItem[i + 1].classList.remove("slider__item--hidden");
      break;
    }
  }
}

function showPrevSlide() {
  for (var i = sliderItem.length - 1; i >= 0; i--) {

    if (i === 0) {
      sliderItem[0].classList.add("slider__item--hidden");
      sliderItem[sliderItem.length - 1].classList.remove("slider__item--hidden");
      break;
    } else if (!sliderItem[i].classList.contains("slider__item--hidden")) {
      sliderItem[i].classList.add("slider__item--hidden");
      sliderItem[i - 1].classList.remove("slider__item--hidden");
      break;
    }
  }
}

