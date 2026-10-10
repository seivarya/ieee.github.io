// info: committee tab switcher logic

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length === 0) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach((b) => b.classList.remove('is-active'));
      tabContents.forEach((c) => c.classList.remove('is-active'));

      btn.classList.add('is-active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('is-active');
      }
    });
  });
});
