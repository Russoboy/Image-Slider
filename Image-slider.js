let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

function changeSlide(n) {
  currentIndex += n;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  showSlide();
}

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
  });
}
