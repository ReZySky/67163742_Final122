let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.banner-slide');
  const totalSlides = slides.length;

  currentSlide += step;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const bannerSlider = document.querySelector('.banner-slider');
  bannerSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// ฟังก์ชันสไลด์อัตโนมัติ
function autoSlide() {
  moveSlide(1);
}

// ให้มันทำงานทุก 3 วิ (3000 มิลลิวินาที)
setInterval(autoSlide, 3000);
