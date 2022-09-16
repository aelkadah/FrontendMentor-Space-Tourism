document.onload = setActive();
function setActive() {
  let currentLocation = location.href;
  let menuLis = document.querySelectorAll("li");
  let menuLisA = document.querySelectorAll("li a");
  for (let i = 0; i < menuLis.length; i++) {
    if (menuLisA[i].href === currentLocation) {
      menuLis[i].classList.add("active");
    }
  }
}

// Vertical Navigation
let menuBtn = document.querySelector(".menuBtn a");
let menuIcon = document.querySelector(".menuBtn a i");
let vertNav = document.querySelector(".vertNav");
menuBtn.addEventListener("click", () => {
  if (vertNav.classList.contains("active")) {
    vertNav.classList.remove("active");
    menuIcon.classList.remove("fa-close");
    menuIcon.classList.add("fa-bars");
  } else {
    vertNav.classList.add("active");
    menuIcon.classList.add("fa-close");
    menuIcon.classList.remove("fa-bars");
  }
});
