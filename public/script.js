const createTodo = document.querySelector("#item");
const addBtn = document.querySelector("#add-btn");
const todoWrapper = document.querySelector(".todo-items-list");
const clearAllBtn = document.querySelector("#clear-all");
addBtn.addEventListener("click", function () {
  let value = createTodo.value;
  todoWrapper.innerHTML += `<div class="todo-item">
      <h1>${value}</h1>
      <div class="icon-wrapper">
        <div class="icons">
          <i id="popup" class="fas fa-plus"></i>
          <i id="delete" class="far fa-trash-alt"></i>
          <i id="check" class="fas fa-check-square"></i>
          <i id="strike" class="fas fa-strikethrough"></i>
          <i id="copy" class="far fa-copy"></i>
          <i id="edit" class="far fa-edit"></i>

        </div>
      </div>
    </div>`;
});

clearAllBtn.addEventListener("click", () => {
  todoWrapper.innerHTML = "";
});
