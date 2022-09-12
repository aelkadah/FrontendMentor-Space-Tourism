document.onload = setActive();
function setActive() {
  console.log(`aa`);
  aObj = document.querySelectorAll("ul li a");
  for (i = 0; i < aObj.length; i++) {
    if (document.location.href.indexOf(aObj[i].href) >= 0) {
      aObj.forEach((ele) => {
        ele.classList.remove("active");
      });
      aObj[i].classList.add("active");
    }
  }
}
