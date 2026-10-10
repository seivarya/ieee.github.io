// info: hero image slider carousel logic

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero__slide');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const heroElement = document.querySelector('.hero');

  if (slides.length === 0) return;

  let currentIndex = 0;
  let slideInterval = null;
  const INTERVAL_TIME = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, INTERVAL_TIME);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // info: navigation controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

  // info: pause playback on hover
  if (heroElement) {
    heroElement.addEventListener('mouseenter', stopAutoPlay);
    heroElement.addEventListener('mouseleave', startAutoPlay);
  }

  // info: initialize first slide and start autoplay
  showSlide(0);
  startAutoPlay();
});
