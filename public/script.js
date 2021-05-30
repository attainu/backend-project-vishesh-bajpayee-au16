const createBtn = document.getElementById("create-btn");
const customDefaultBtn = document.querySelector(".hidden-btn-position-wrapper");
const customTimerBtn = document.getElementById("custom-timer-btn");
const defaultTimerBtn = document.getElementById("default-timer-btn");
const hiddenSetTimer = document.querySelector(
  ".hidden-set-timer-wrapper-position"
);
const hiddenDefaultTimer = document.querySelector(
  ".hidden-default-timer-wrapper-position"
);
const beginSetBtn = document.getElementById("begin-set");
const beginDefaultBtn = document.getElementById("begin-default");

const enableDisplay = function (clickBtn, displayDiv) {
  clickBtn.addEventListener("click", function () {
    if (displayDiv.style.display === "none") {
      displayDiv.style.display = "block";
      displayDiv.style.animation = "opacityup .2s linear ";
    } else {
      displayDiv.style.display = "none";
      displayDiv.style.animation = "opacityup .2s linear ";
    }
  });
};
const disableDisplay = function (button) {
  button.addEventListener("click", function () {
    customDefaultBtn.style.display = "none";
    hiddenDefaultTimer.style.display = "none";
    hiddenSetTimer.style.display = "none";
  });
};

enableDisplay(createBtn, customDefaultBtn);
enableDisplay(customTimerBtn, hiddenSetTimer);
enableDisplay(defaultTimerBtn, hiddenDefaultTimer);
disableDisplay(beginDefaultBtn);
disableDisplay(beginSetBtn);
