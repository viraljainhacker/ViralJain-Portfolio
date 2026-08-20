/* =========================================
   TYPING EFFECT
========================================= */

const text = ["Web Developer", "Web Designer", "Tech Enthusiast"];

let count = 0;
let index = 0;

function type() {
  const typingElement = document.querySelector(".typing");

  // Typing element sirf Home page par hai
  if (!typingElement) {
    return;
  }

  const currentText = text[count];

  typingElement.textContent = currentText.slice(0, ++index);

  if (index === currentText.length) {
    count = (count + 1) % text.length;
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


  /* Close menu after clicking a navigation link */

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


/* Open image */

if (galleryImages.length > 0 && lightbox && lightboxImage) {

  galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });

}


/* Close lightbox */

function closeLightbox() {

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


/* Close button */

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
