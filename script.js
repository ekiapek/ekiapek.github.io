const revealElements = document.querySelectorAll('.reveal');
const siteHeader = document.querySelector('.site-header');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  },
);

revealElements.forEach((el) => observer.observe(el));

const syncHeaderStickyStyle = () => {
  if (!siteHeader) return;

  siteHeader.classList.toggle('is-stuck', window.scrollY > 14);
};

window.addEventListener('scroll', syncHeaderStickyStyle, { passive: true });
syncHeaderStickyStyle();

document.getElementById('year').textContent = new Date().getFullYear();
