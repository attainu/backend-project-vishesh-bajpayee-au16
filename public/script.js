const createItem = document.querySelector("#item");
const addBtn = document.querySelector("#add-btn");
const todoWrapper = document.querySelector(".todo-items-list");
const clearAllBtn = document.querySelector("#clear-all");
let count = 0;
addBtn.addEventListener("click", async function () {
  count += 1;
  let value = createItem.value;
  createItem.value = "";
  todoWrapper.innerHTML += ` <div class="todo-item">
        <h1 id="item-value">${value}</h1>

        <div class="icon">

          <div id="add">

            <i id="" class="fas fa-check-circle"></i>
          </div>

          <div class="icon-feature">
            <i id="delete" class="far fa-trash-alt"></i>
            <i id="copy" class="far fa-copy"></i>
            <i id="edit" class="far fa-edit"></i>

          </div>
        </div>

      </div>
    </div>`;
  const todoItems = document.querySelectorAll(".todo-item");
  const deleteBtns = document.querySelectorAll("#delete");
  const checkBtns = document.querySelectorAll("#check");
  const strikeBtns = document.querySelectorAll("#strike");
  const editBtns = document.querySelectorAll("#edit");
  const itemValues = document.querySelectorAll("#item-value");
  for (let index = 0; index < deleteBtns.length; index++) {
    const btn = deleteBtns[index];
    const checkBtn = checkBtns[index];
    const strikeBtn = strikeBtns[index];
    const itemValue = itemValues[index];
    const editBtn = editBtns[index];
    btn.addEventListener("click", async function () {
      const deletePayload = {
        item: itemValue[index],
        count: count,
      };

      const axiosRequest = await axios.delete(
        "/dashboard/todo/delete",
        deletePayload
      );
      todoItems[index].remove();
    });
    checkBtn.addEventListener("click", function () {
      todoItems[index].style.background = "white";
      todoItems[index].style.boxShadow = "0px 0px 5px 1px #81b214"; // createItem.color = "black";
      checkBtn.style.color = "teal";
    });
    strikeBtn.addEventListener("click", function () {
      itemValue.style.textDecoration = "line-through";
    });
    editBtn.addEventListener("click", function () {
      itemValue.toggleAttribute("contenteditable", true);
    });
  }
  const valObj = {
    count: count,
    item: value,
  };
  const axiosSend = await axios.post("/dashboard/todo", valObj);
  console.log(axiosSend);
});
clearAllBtn.addEventListener("click", () => {
  todoWrapper.innerHTML = "";
});
