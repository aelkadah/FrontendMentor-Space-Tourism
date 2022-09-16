document.onload = setActive();
function setActive() {
  let currentLocation = location.pathname;
  let menuLis = document.querySelectorAll("li");
  let menuLisA = document.querySelectorAll("li a");
  for (let i = 0; i < menuLis.length; i++) {
    if (currentLocation == "/") {
      menuLisA.forEach((liA) => {
        if (liA.pathname == "/index.html") {
          liA.parentElement.classList.add("active");
        }
      });
    } else if (menuLisA[i].pathname == currentLocation) {
      menuLis[i].classList.add("active");
    }
  }
}

// Vertical Navigation
let menuButton = document.querySelector(".menuBtn");
let menuBtnA = document.querySelector(".menuBtn a");
let menuIcon = document.querySelector(".menuBtn a i");
let vertNav = document.querySelector(".vertNav");
menuBtnA.addEventListener("click", () => {
  if (vertNav.classList.contains("active")) {
    vertNav.classList.remove("active");
    menuIcon.classList.remove("fa-close");
    menuIcon.classList.add("fa-bars");
    menuButton.classList.remove("active");
  } else {
    vertNav.classList.add("active");
    menuIcon.classList.add("fa-close");
    menuIcon.classList.remove("fa-bars");
    menuButton.classList.add("active");
  }
});
