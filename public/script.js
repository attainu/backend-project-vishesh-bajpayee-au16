const container = document.getElementsByClassName("container")[0];
const titleInput = document.getElementById("title-input");
const noteInput = document.getElementById("note-input");
const body = document.getElementsByClassName("notes")[0];
const addBtn = document.getElementById("addBtn");
const noteWrapper = document.getElementsByClassName("note-wrapper")[0];
const clearAllBtn = document.getElementById("clear-all");
noteInput.addEventListener("click", function () {
  container.style.height = "150px";
  titleInput.style.display = "inline";
  noteInput.style.top = "5vh";
});
addBtn.addEventListener("click", function () {
  let title = titleInput.value;
  let para = noteInput.value;
  noteWrapper.innerHTML += `<div contenteditable id=${title}  class="note"> <h1>${title}</h1>
  <p>${para}</p> <div class="button-wrapper"> <i id="highlight" class="fas
  fa-star"></i> <i id="delete" class="far fa-trash-alt"></i> </div> </div>`;
});
clearAllBtn.addEventListener("click", function () {
  noteWrapper.innerHTML = "";
});
const allNotes = document.getElementsByClassName("note");
console.log(allNotes);
