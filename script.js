const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
});

cards.forEach(card => observer.observe(card));

// Only run on mobile
if (window.innerWidth <= 768) {
  cards.forEach(card => observer.observe(card));
}