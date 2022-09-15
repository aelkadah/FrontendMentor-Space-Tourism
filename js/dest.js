document.onload = destData();

let destUl = document.querySelector(".destUl");
let destName = document.querySelector(".destName");
let destDescription = document.querySelector(".destDescription");
let distance = document.querySelector(".distance h1");
let time = document.querySelector(".time h1");
let destImg = document.querySelector(".destContent .image img");

function destData() {
  fetch("./js/destination.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        destUl.appendChild(
          Object.assign(document.createElement("li"), {
            innerHTML: `${data[i].name}`,
            id: `${i}`,
          })
        );
        let destLis = document.querySelectorAll(".destUl li");
        destLis[0].classList.add("active");
        destImg.src = `${data[0].images.png}`;
        destName.innerHTML = `${data[0].name}`;
        destDescription.innerHTML = `${data[0].description}`;
        distance.innerHTML = `${data[0].distance}`;
        time.innerHTML = `${data[0].travel}`;
        destLis.forEach((li) => {
          li.addEventListener("click", function () {
            destLis.forEach((elee) => {
              elee.classList.remove("active");
            });
            li.classList.add("active");
            i = li.getAttribute("id");
            destImg.src = `${data[i].images.png}`;
            destName.innerHTML = `${data[i].name}`;
            destDescription.innerHTML = `${data[i].description}`;
            distance.innerHTML = `${data[i].distance}`;
            time.innerHTML = `${data[i].travel}`;
          });
        });
      }
    });
}
