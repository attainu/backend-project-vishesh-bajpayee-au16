const addRepository = document.getElementById("add-repository");
const addRepoContainer = document.getElementsByClassName("repo-container")[0];
const body = document.getElementsByClassName("dashboard")[0];

addRepository.addEventListener("click", () => {
  body.classList.toggle("overlay");
  addRepoContainer.style.display = "block";
});

// body.addEventListener("click", () => {
//   addRepoContainer.style.display = "none";
// });
