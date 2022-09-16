document.onload = crewData();

function crewData() {
  fetch("./js/crew.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      // Pagination Create
      for (let i = 0; i < data.length; i++) {
        let pagination = document.querySelector(".bullets");
        pagination.appendChild(
          Object.assign(document.createElement("li"), {
            id: `${i}`,
          })
        );
      }

      let paginationLis = document.querySelectorAll(".bullets li");
      let memberName = document.querySelector(".memberName");
      let memberRole = document.querySelector(".memberRole");
      let memberBio = document.querySelector(".memberBio");
      let memberImg = document.querySelector(".image img");

      paginationLis[0].classList.add("active");
      memberName.innerHTML = `${data[0].name}`;
      memberRole.innerHTML = `${data[0].role}`;
      memberBio.innerHTML = `${data[0].bio}`;
      memberImg.src = `${data[0].images.png}`;

      let counter = 0;

      function dataChecker() {
        setInterval(function () {
          if (counter === data.length) {
            counter = 0;
          } else {
            paginationLis.forEach((li) => {
              li.classList.remove("active");
            });
            paginationLis[counter].classList.add("active");
            memberName.innerHTML = `${data[counter].name}`;
            memberRole.innerHTML = `${data[counter].role}`;
            memberBio.innerHTML = `${data[counter].bio}`;
            memberImg.src = `${data[counter].images.png}`;
            counter++;
          }
        }, 3000);
      }
      dataChecker();

      paginationLis.forEach((li) => {
        li.addEventListener("click", () => {
          counter = li.getAttribute("id");
          paginationLis.forEach((li) => {
            li.classList.remove("active");
          });
          paginationLis[counter].classList.add("active");
          memberName.innerHTML = `${data[counter].name}`;
          memberRole.innerHTML = `${data[counter].role}`;
          memberBio.innerHTML = `${data[counter].bio}`;
          memberImg.src = `${data[counter].images.png}`;
        });
      });
    });
}
