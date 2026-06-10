const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching once visible
    }
  });
}, {
  threshold: 0.1 // card needs to be 10% visible before triggering
});

if (window.innerWidth <= 768) {
  cards.forEach(card => observer.observe(card));
}