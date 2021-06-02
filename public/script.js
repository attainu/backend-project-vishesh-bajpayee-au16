// DOCUMENTS
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
const setTimerInput = document.getElementById("timer");
const setBreakInput = document.getElementById("break");
const timerWrapper = document.querySelector(".timer-wrapper-position");
const breakWrapper = document.querySelector(".break-wrapper-position");
const timeIndicator = document.querySelectorAll(".time-indicator");
const timerContainer = document.querySelectorAll(".timer-container");
// FUNCTIONS

const enableDisplay = function (clickBtn, displayDiv) {
  clickBtn.addEventListener("click", function () {
    if (displayDiv.style.display === "none") {
      displayDiv.style.display = "block";
      displayDiv.style.animation = "opacityup .2s ease-in ";
    } else {
      displayDiv.style.display = "none";
      displayDiv.style.animation = "opacityup .2s ease-in ";
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

// EVENT LISTENERS
beginSetBtn.addEventListener("click", function () {
  const timerInfoList = [];
  timerInfoList.push(setTimerInput.value);
  timerInfoList.push(setBreakInput.value);
  console.log(timerInfoList);
});

beginDefaultBtn.addEventListener("click", function () {
  timerWrapper.style.display = "block";
  breakWrapper.style.display = "block";
  timerContainer[0].setAttribute("class", "animation-class");
  createBtn.setAttribute("disabled", true);
  createBtn.style.background = "gray";
  let timeValue = 25;
  const intervel = setInterval(() => {
    timeValue -= 1;
    timeIndicator[0].textContent = `${timeValue}`;
    if (timeValue == 0) {
      timerContainer[0].style.background = "teal";
      clearInterval(intervel);
    }
  }, 60000);
});

enableDisplay(createBtn, customDefaultBtn);
enableDisplay(customTimerBtn, hiddenSetTimer);
enableDisplay(defaultTimerBtn, hiddenDefaultTimer);
disableDisplay(beginDefaultBtn);
disableDisplay(beginSetBtn);
