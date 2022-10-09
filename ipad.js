const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})




ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  //target elements, and specify options to create reveal animations
  ScrollReveal().reveal('.section-1-1-title h1', { delay: 100, origin: 'bottom' });
  ScrollReveal().reveal('.section-1-2-title h2', { delay: 200, origin: 'bottom' });
  ScrollReveal().reveal('.section-1-3-title h2', { delay: 300, origin: 'bottom' });
  ScrollReveal().reveal('.section-1-4-title', { delay: 900, origin: 'top' });
  ScrollReveal().reveal('.section-1-image img', { delay: 200, origin: 'left', interval: 300 });
  ScrollReveal().reveal('.section-3-image1', { delay: 200, origin: 'left', distance: '90px' });
  ScrollReveal().reveal('.section-3-image2', { delay: 500, origin: 'right', distance: '90px' });
  ScrollReveal().reveal('.section2image', { scale: 0.7 });
  ScrollReveal().reveal('.section-2-1-title', { scale: 1.4 });