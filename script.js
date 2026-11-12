
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');

    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Automatically update copyright year
document.getElementById('year').textContent =
  new Date().getFullYear();
