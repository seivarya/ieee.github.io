// Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Handle dropdown toggle on mobile
const dropdownTriggers = document.querySelectorAll('.dropdown > a');

dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= 1200) {
            e.preventDefault(); // Prevent default anchor behavior
            const parentLi = this.parentElement;
            parentLi.classList.toggle('open');
        }
    });
});


// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

//gallery slider
let galleryIndex = 0;
const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');

function showGallerySlide(index) {
  gallerySlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextGallerySlide() {
  console.log(galleryIndex);
  galleryIndex = (galleryIndex + 1) % gallerySlides.length;
  showGallerySlide(galleryIndex);
}

function prevGallerySlide() {
  console.log(galleryIndex);
  galleryIndex = (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
  showGallerySlide(galleryIndex);
}

// Auto-slide every 5 seconds
setInterval(nextGallerySlide, 5000);

// Manual navigation
galleryNext.addEventListener('click', nextGallerySlide);
galleryPrev.addEventListener('click', prevGallerySlide);

// Show first slide
showGallerySlide(galleryIndex);
