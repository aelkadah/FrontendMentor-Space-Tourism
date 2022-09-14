// document.onload = setActive();
// function setActive() {
//   console.log(`aa`);
//   aObj = document.querySelectorAll("ul li a");
//   for (i = 0; i < aObj.length; i++) {
//     if (document.location.href.indexOf(aObj[i].href) >= 0) {
//       aObj.forEach((ele) => {
//         ele.classList.remove("active");
//       });
//       aObj[i].classList.add("active");
//     }
//   }
// }

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
