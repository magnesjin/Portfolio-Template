function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, obs) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); 
  // Uncomment for one-time reveal: // 
  obs.unobserve(entry.target); 
} else 
  { // For repeat animations when scrolling back: 
    entry.target.classList.remove('is-visible'); } }); 
  }, { root: null, rootMargin: '0px 0px -20% 0px', threshold: 0.3 });
  revealEls.forEach(el => revealObserver.observe(el));