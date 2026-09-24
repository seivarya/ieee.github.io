// info: campus and tourist gallery slider carousel logic

document.addEventListener('DOMContentLoaded', () => {
  const gallerySliders = document.querySelectorAll('.gallery-wrapper');

  gallerySliders.forEach((wrapper) => {
    const slides = wrapper.querySelectorAll('.gallery-slide');
    const prevBtn = wrapper.querySelector('.gallery-btn--prev');
    const nextBtn = wrapper.querySelector('.gallery-btn--next');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval = null;
    const INTERVAL_TIME = 4500;

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
      if (autoPlayInterval) clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(nextSlide, INTERVAL_TIME);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }

    // info: next button click handler
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay();
      });
    }

    // info: prev button click handler
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
      });
    }

    // info: pause autoplay on hover
    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    // info: initialize first slide and start autoplay
    showSlide(0);
    startAutoPlay();
  });
});
