const container = document.getElementsByClassName("container")[0];
const titleInput = document.getElementById("title-input");
const noteInput = document.getElementById("note-input");
const body = document.getElementsByClassName("notes")[0];
const addBtn = document.getElementById("addBtn");
const noteWrapper = document.getElementsByClassName("note-wrapper")[0];
const clearAllBtn = document.getElementById("clear-all");
let count = 0;
noteInput.addEventListener("click", function () {
  container.style.height = "150px";
  titleInput.style.display = "inline";
  noteInput.style.top = "5vh";
});

// Push request
addBtn.addEventListener("click", async function () {
  count += 1;
  let title = titleInput.value;
  let para = noteInput.value;
  noteWrapper.innerHTML += `<div
  id=${title} class="note"> <h1 contenteditable>${title}</h1> <p
  contenteditable>${para}</p> <div class="button-wrapper"> <i id="highlight"
  class="fas fa-star"></i> <i id="delete" class="far fa-trash-alt"></i> </div>
  </div>`;
  const notes = document.querySelectorAll(".note");
  const deleteBtns = document.querySelectorAll("#delete");

  for (let index = 0; index < deleteBtns.length; index++) {
    const deletebtn = deleteBtns[index];
    const notesDiv = notes[index];
    // Delete request
    deletebtn.addEventListener("click", async function () {
      const notesHeading = notesDiv.children[0].textContent;
      const notesPara = notesDiv.children[1].textContent;

      const deletePayload = {
        notesHeading: notesHeading,
        notesPara: notesPara,
      };

      console.log(deletePayload);
      notesDiv.remove();

      await axios.delete("/database/notes/delete", {
        data: { deletePayload: deletePayload },
      });
    });
  }
  const payloadObj = { title: title, content: para, count: count };
  const axiousReq = await axios.post("/dashboard/notes/", payloadObj);
});
clearAllBtn.addEventListener("click", function () {
  noteWrapper.innerHTML = "";
});
