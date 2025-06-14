const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementbyid('prev-button');
const btnNext = document.getElementById('next-button'); 

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlide() {
    hideSlider()
  if(currentSlide === slider.length - 1) {
    currentSlide = 0
  }  else {
    currentSlide++;
  }
    showSlider
    }

    function prevSlide() {
    hideSlider();
  if(currentSlide === 0) {
    currentSlide = slider.length - 1
  }  else {
    currentSlide--
  }
    showSlider()
    }

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
