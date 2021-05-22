const container = document.getElementsByClassName("container")[0];
const titleInput = document.getElementById("title-input");
const noteInput = document.getElementById("note-input");
const body = document.getElementsByClassName("notes")[0];
const addBtn = document.getElementById("addBtn");
const noteWrapper = document.getElementsByClassName("note-wrapper")[0];

noteInput.addEventListener("click", () => {
  container.style.height = "150px";
  titleInput.style.display = "inline";
  noteInput.style.top = "5vh";
});

console.log(noteWrapper);
addBtn.addEventListener("click", () => {
  noteWrapper.innerHTML += `<div class="note"></div>`;
});
console.log(noteWrapper);
