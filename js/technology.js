document.onload = techData();

function techData() {
  fetch("./js/technology.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        let pagination = document.querySelector(".pagination");
        pagination.appendChild(
          Object.assign(document.createElement("li"), {
            id: `${i}`,
          })
        );
      }

      let paginationLis = document.querySelectorAll(".pagination li");
      let techName = document.querySelector(".dataCont h1");
      let techDescription = document.querySelector(".dataCont p");
      let techPortrait = document.querySelector(".images .portrait");
      let techLandscape = document.querySelector(".images .landscape");

      paginationLis[0].classList.add("active");
      techName.innerHTML = `${data[0].name}`;
      techDescription.innerHTML = `${data[0].description}`;
      techPortrait.src = `${data[0].images.portrait}`;
      techLandscape.src = `${data[0].images.landscape}`;

      let counter = 0;

      function theChecker() {
        setInterval(function () {
          if (counter == data.length) {
            counter = 0;
          } else {
            paginationLis.forEach((li) => {
              li.classList.remove("active");
            });
            paginationLis[counter].classList.add("active");

            techName.innerHTML = `${data[counter].name}`;
            techDescription.innerHTML = `${data[counter].description}`;
            techPortrait.src = `${data[counter].images.portrait}`;
            techLandscape.src = `${data[counter].images.landscape}`;
            counter++;
          }
        }, 3000);
      }
      theChecker();

      paginationLis.forEach((li) => {
        li.addEventListener("click", () => {
          counter = li.getAttribute("id");
          paginationLis.forEach((li) => {
            li.classList.remove("active");
          });
          paginationLis[counter].classList.add("active");
          techName.innerHTML = `${data[counter].name}`;
          techDescription.innerHTML = `${data[counter].description}`;
          techPortrait.src = `${data[counter].images.portrait}`;
          techLandscape.src = `${data[counter].images.landscape}`;
        });
      });
    });
}
