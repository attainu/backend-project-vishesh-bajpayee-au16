// // DOCUMENTS
// const createBtn = document.getElementById("create-btn");
// const customDefaultBtn = document.querySelector(".hidden-btn-position-wrapper");
// const customTimerBtn = document.getElementById("custom-timer-btn");
// const defaultTimerBtn = document.getElementById("default-timer-btn");
// const hiddenSetTimer = document.querySelector(
//   ".hidden-set-timer-wrapper-position"
// );
// const hiddenDefaultTimer = document.querySelector(
//   ".hidden-default-timer-wrapper-position"
// );
// const beginSetBtn = document.getElementById("begin-set");
// const beginDefaultBtn = document.getElementById("begin-default");
// const setTimerInput = document.getElementById("timer");
// const setBreakInput = document.getElementById("break");
// const timerWrapper = document.querySelector(".timer-wrapper-position");
// const breakWrapper = document.querySelector(".break-wrapper-position");
// const timeIndicator = document.querySelectorAll(".time-indicator");
// const timerContainer = document.querySelectorAll(".timer-container");
// // FUNCTIONS

// const enableDisplay = function (clickBtn, displayDiv) {
//   clickBtn.addEventListener("click", function () {
//     if (displayDiv.style.display === "none") {
//       displayDiv.style.display = "block";
//       displayDiv.style.animation = "opacityup .2s ease-in ";
//     } else {
//       displayDiv.style.display = "none";
//       displayDiv.style.animation = "opacityup .2s ease-in ";
//     }
//   });
// };
// const disableDisplay = function (button) {
//   button.addEventListener("click", function () {
//     customDefaultBtn.style.display = "none";
//     hiddenDefaultTimer.style.display = "none";
//     hiddenSetTimer.style.display = "none";
//   });
// };

// // EVENT LISTENERS
// beginSetBtn.addEventListener("click", function () {
//   const timerInfoList = [];
//   timerInfoList.push(setTimerInput.value);
//   timerInfoList.push(setBreakInput.value);
//   console.log(timerInfoList);
// });

// beginDefaultBtn.addEventListener("click", function () {
//   timerWrapper.style.display = "block";
//   breakWrapper.style.display = "block";
//   createBtn.setAttribute("disabled", true);
//   createBtn.style.background = "gray";
//   let timeValue = 10;
//   const intervel = setInterval(() => {
//     timeValue -= 1;
//     timeIndicator[0].textContent = `${timeValue}`;
//     if (timeValue == 0) {
//       timerContainer[0].style.background = "teal";
//       clearInterval(intervel);
//     }
//   }, 1000);
// });

// enableDisplay(createBtn, customDefaultBtn);
// enableDisplay(customTimerBtn, hiddenSetTimer);
// enableDisplay(defaultTimerBtn, hiddenDefaultTimer);
// disableDisplay(beginDefaultBtn);
// disableDisplay(beginSetBtn);

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
        <h1 class="dynamic-color" id="item-value">${value}</h1>

        <div class="icon">

          <div id="add">

            <i id="check" class="fas fa-check-circle"></i>
          </div>

          <div class="icon-feature">
            <i id="delete" class="far fa-trash-alt"></i>
            <i id="copy" class="far fa-copy"></i>
            <i id="strike" class="fas fa-strikethrough"></i>
            <i id="edit" id="edit" class="far fa-edit"></i>

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
  for (let index = 0; index < todoItems.length; index++) {
    const todoItem = todoItems[index];
    const deleteBtn = deleteBtns[index];
    const checkBtn = checkBtns[index];
    const strikeBtn = strikeBtns[index];
    const itemValue = itemValues[index];
    const editBtn = editBtns[index];
    deleteBtn.addEventListener("click", async function () {
      todoItem.remove();
      let item = itemValue.textContent;

      const deletePayload = {
        item: item,
        count: count,
      };

      console.log(deletePayload);
      await axios.delete("/dashboard/todo/delete", {
        data: { deletePayload: deletePayload },
      });
    });
    checkBtn.addEventListener("click", function () {
      todoItem.style.background = "white";
      todoItem.style.boxShadow = "0px 0px 5px 1px #81b214"; // createItem.color = "black";
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
  // console.log(axiosSend);
});

let payloadArray = [];
clearAllBtn.addEventListener("click", async () => {
  const todoItems = document.querySelectorAll(".todo-item");
  for (let index = 0; index < todoItems.length; index++) {
    const todoContent = todoItems[index].children;
    payloadArray.push(todoContent[0].textContent);
  }
  // console.log(todoItems);

  console.log(payloadArray);
  todoWrapper.innerHTML = "";
  await axios.delete("/dashboard/todo/deleteall", {
    data: { deleteAllPayload: payloadArray },
  });
});
