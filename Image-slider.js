let currentIndex = 0;

function changeSlide(n) {
  currentIndex += n;
  showSlide(currentIndex);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');

  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
  });
}

// Optional: Automatically advance slides
// setInterval(() => changeSlide(1), 3000);
