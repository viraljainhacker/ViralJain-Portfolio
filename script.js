const text = ["Web Developer", "Web Designer", "Tech Enthusiast"];

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

    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}

type();

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
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
}

/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");

  document.body.style.overflow = "";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

/* Click outside image */

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

/* ESC key */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
