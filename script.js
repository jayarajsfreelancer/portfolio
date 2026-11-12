
/* ==============================
   JAYARAJ S. - PORTFOLIO SCRIPT
================================= */

// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "Close" : "Menu";
  });

  // Close menu after clicking a navigation link

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    });
  });

  // Close menu when clicking outside

  document.addEventListener("click", (event) => {
    const clickedInside =
      menuBtn.contains(event.target) ||
      navLinks.contains(event.target);

    if (!clickedInside) {
      navLinks.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    }
  });
}


// Automatic copyright year

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// Scroll reveal animation

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

} else {

  // Fallback for older browsers

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}
