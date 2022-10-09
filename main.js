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
  ScrollReveal().reveal('.section-1-title', { delay: 100, origin: 'bottom' });
  ScrollReveal().reveal('.section-1-links', { delay: 200, origin: 'bottom' });
  ScrollReveal().reveal('.section-2-background', { delay: 50, origin: 'left' });
  ScrollReveal().reveal('.section-2-title', { delay: 150, origin: 'right' });
  ScrollReveal().reveal('.section-2-links', { delay: 200, origin: 'bottom', interval: 300 });
  ScrollReveal().reveal('.section-3-background', { delay: 200, origin: 'right', interval: 200 });
  ScrollReveal().reveal('.section-3-title', { delay: 100, origin: 'top', interval: 200 });
  ScrollReveal().reveal('.section-4-title', { delay: 150, origin: 'top'});
  ScrollReveal().reveal('.macbook h4', { delay: 150, origin: 'top'});
  ScrollReveal().reveal('.macbook h1', { delay: 150, origin: 'bottom'});
  ScrollReveal().reveal('.macbook h3', { delay: 400, origin: 'bottom'});
  ScrollReveal().reveal('.section-5-background', { delay: 200, origin: 'bottom', interval: 500 });
  ScrollReveal().reveal('.section-5-title img', { delay: 400, origin: 'top'});
  ScrollReveal().reveal('.section-5-title h3', { delay: 600, origin: 'bottom'});