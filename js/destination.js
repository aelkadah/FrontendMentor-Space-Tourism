// Destination Navigation ul
document.onload = moonData();

let destUl = document.querySelector(".destUl");
let lis = document.querySelectorAll(".destUl li");
let moonBtn = document.querySelector("#moon");
let marsBtn = document.querySelector("#mars");
let europaBtn = document.querySelector("#europa");
let titanBtn = document.querySelector("#titan");
let destName = document.querySelector(".destName");
let destDescription = document.querySelector(".destDescription");
let distance = document.querySelector(".distance h1");
let time = document.querySelector(".time h1");
let destImg = document.querySelector(".destContent .image img");

function moonData() {
  fetch("./js/destination.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      lis.forEach((element) => {
        element.classList.remove("active");
      });
      moonBtn.classList.add("active");
      destImg.removeAttribute("src");
      destImg.src = `${data[0].images.png}`;
      destName.innerHTML = `${data[0].name}`;
      destDescription.innerHTML = `${data[0].description}`;
      distance.innerHTML = `${data[0].distance}`;
      time.innerHTML = `${data[0].travel}`;
    });
}
function marsData() {
  fetch("./js/destination.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      lis.forEach((element) => {
        element.classList.remove("active");
      });
      marsBtn.classList.add("active");
      destImg.removeAttribute("src");
      destImg.src = `${data[1].images.png}`;
      destName.innerHTML = `${data[1].name}`;
      destDescription.innerHTML = `${data[1].description}`;
      distance.innerHTML = `${data[1].distance}`;
      time.innerHTML = `${data[1].travel}`;
    });
}
function europaData() {
  fetch("./js/destination.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      lis.forEach((element) => {
        element.classList.remove("active");
      });
      europaBtn.classList.add("active");
      destImg.removeAttribute("src");
      destImg.src = `${data[2].images.png}`;
      destName.innerHTML = `${data[2].name}`;
      destDescription.innerHTML = `${data[2].description}`;
      distance.innerHTML = `${data[2].distance}`;
      time.innerHTML = `${data[2].travel}`;
    });
}

function titanData() {
  fetch("./js/destination.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      lis.forEach((element) => {
        element.classList.remove("active");
      });
      titanBtn.classList.add("active");
      destImg.removeAttribute("src");
      destImg.src = `${data[3].images.png}`;
      destName.innerHTML = `${data[3].name}`;
      destDescription.innerHTML = `${data[3].description}`;
      distance.innerHTML = `${data[3].distance}`;
      time.innerHTML = `${data[3].travel}`;
    });
}
moonBtn.onclick = moonData;
marsBtn.onclick = marsData;
europaBtn.onclick = europaData;
titanBtn.onclick = titanData;
