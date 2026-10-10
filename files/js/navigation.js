// info: navigation bar interactions and mobile drawer

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // info: highlight current active page in navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.navbar__link, .dropdown__link');

  allNavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector('.navbar__link');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  // info: mobile menu toggle handlers
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // info: close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        dropdowns.forEach((dd) => dd.classList.remove('is-open'));
      }
    });

    // info: close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // info: mobile dropdown accordion
  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.navbar__link');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        // info: in mobile view toggle dropdown accordion
        if (window.innerWidth <= 1100) {
          e.preventDefault();
          const isOpen = dropdown.classList.toggle('is-open');
          trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

          // info: close other open dropdowns
          dropdowns.forEach((otherDd) => {
            if (otherDd !== dropdown) {
              otherDd.classList.remove('is-open');
              const otherTrigger = otherDd.querySelector('.navbar__link');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            }
          });
        }
      });
    }
  });

  // info: reset mobile states on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
      if (navMenu) navMenu.classList.remove('is-open');
      if (navToggle) {
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
      dropdowns.forEach((dd) => {
        dd.classList.remove('is-open');
        const trigger = dd.querySelector('.navbar__link');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
