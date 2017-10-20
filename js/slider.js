// Слайдер
var sliderItem = document.getElementsByClassName('slider__item');
var prevSlide = document.querySelector('.reviews__prev');
var nextSlide = document.querySelector('.reviews__next');

nextSlide.addEventListener('click', showNextSlide);
prevSlide.addEventListener('click', showPrevSlide);


function showNextSlide() {
  for (var i = 0; i < sliderItem.length; i++) {

    if (i === sliderItem.length - 1) {
      sliderItem[i].classList.add('slider__item--hidden');
      sliderItem[0].classList.remove('slider__item--hidden');
      break;
    } else if (!sliderItem[i].classList.contains('slider__item--hidden')) {
      sliderItem[i].classList.add('slider__item--hidden');
      sliderItem[i + 1].classList.remove('slider__item--hidden');
      break;
    }
  }
}

function showPrevSlide() {
  for (var i = sliderItem.length - 1; i >= 0; i--) {

    if (i === 0) {
      sliderItem[0].classList.add('slider__item--hidden');
      sliderItem[sliderItem.length - 1].classList.remove('slider__item--hidden');
      break;
    } else if (!sliderItem[i].classList.contains('slider__item--hidden')) {
      sliderItem[i].classList.add('slider__item--hidden');
      sliderItem[i - 1].classList.remove('slider__item--hidden');
      break;
    }
  }
}