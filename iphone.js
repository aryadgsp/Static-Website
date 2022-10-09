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
  ScrollReveal().reveal('.section-1-logo img', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.section-2-background', { delay: 200, origin: 'right' });
  ScrollReveal().reveal('.section-2-title h1', { delay: 800, origin: 'left' });
  ScrollReveal().reveal('.section-2-title p', { delay: 1000, origin: 'top', distance: '90px', duration: 1500 });
  ScrollReveal().reveal('.section-3-background img', { delay: 1000, origin: 'left', interval: 300, distance: '800px'});
  ScrollReveal().reveal('.section-3-title h1', { delay: 50, origin: 'top', distance: '90px' });
  ScrollReveal().reveal('.section-3-title p', { delay: 400, origin: 'top' });
  ScrollReveal().reveal('.section-4-image1', { delay: 300, origin: 'left'});
  ScrollReveal().reveal('.section-4-image2', { delay: 400, origin: 'right'});
  ScrollReveal().reveal('.satu', { delay: 600, origin: 'right'});
  ScrollReveal().reveal('.dua', { delay: 600, origin: 'left'});