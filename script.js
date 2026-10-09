/* =========================================================
   VIRAL JAIN PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

/* =========================================================
   TYPING EFFECT
========================================================= */

const text = [
  "Web Developer",
  "Web Designer",
  "Tech Enthusiast",
  "Creative Developer",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  const typingElement = document.querySelector(".typing");

  if (!typingElement) {
    return;
  }

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;

    setTimeout(type, 1200);
  } else {
    setTimeout(type, 90);
  }
}

type();

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    if (isOpen) {
      menuToggle.textContent = "✕";

      menuToggle.setAttribute("aria-label", "Close navigation");
    } else {
      menuToggle.textContent = "☰";

      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });

  /* Close menu after clicking a link */

  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      menuToggle.textContent = "☰";

      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  /* Close menu when clicking outside */

  document.addEventListener("click", (event) => {
    const clickedInsideNavbar = event.target.closest(".navbar");

    if (!clickedInsideNavbar && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");

      menuToggle.textContent = "☰";

      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(image) {
    if (!lightbox || !lightboxImage) {
        console.error("Lightbox HTML elements are missing!");
        return;
    }

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "Gallery Image";

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

galleryImages.forEach((image) => {
    image.style.cursor = "pointer";

    image.addEventListener("click", () => {
        openLightbox(image);
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
  ".section-heading, " +
    ".intro-text, " +
    ".intro-card, " +
    ".skill-box, " +
    ".featured-project-card, " +
    ".game-card, " +
    ".game-mini-card, " +
    ".certificate-card, " +
    ".creative-item, " +
    ".education-card, " +
    ".project-card, " +
    ".contact-box, " +
    ".stat-box",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";

          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);
  });
}

/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================================= */

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* =========================================================
   BUTTON CLICK FEEDBACK
========================================================= */

const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "scale(0.97)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

/* =========================================================
   PREVENT BROKEN IMAGE DISPLAY
========================================================= */

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("error", () => {
    image.style.display = "none";
  });
});

/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
  "%cViral Jain Portfolio",
  "color:#00ffff;font-size:20px;font-weight:bold;",
);

console.log(
  "%cWeb Developer | Web Designer | Tech Enthusiast",
  "color:#ffffff;font-size:13px;",
);
