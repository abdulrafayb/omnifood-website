"use strict";

// Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Nav
const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky NavBar
const heroSectionEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      // console.log(ent.isIntersecting);
      // console.log(!ent.isIntersecting);
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      // console.log(ent.isIntersecting);
      // console.log(!ent.isIntersecting);
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, //means viewport
    threshold: 0, // 0% hero section is inside of the viewport
    rootMargin: "-80px",
  }
);
observer.observe(heroSectionEl);
