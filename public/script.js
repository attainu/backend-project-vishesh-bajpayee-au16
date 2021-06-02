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
const breakContainer = document.querySelectorAll(".break-container");
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
  const initialIntervel = setInterval(() => {
    timeValue -= 1;
    timeIndicator[0].textContent = `${timeValue}`;
    if (timeValue == 0) {
      timerContainer[0].style.background = "teal";
      clearInterval(initialIntervel);
    }
  }, 60000);
  setBreakFunc(5, 25000, 0);
  setTimerFunc(25, 30000, 1);
  setBreakFunc(5, 55000, 1);
  setTimerFunc(25, 60000, 2);
  setBreakFunc(5, 85000, 2);
  setTimerFunc(25, 90000, 3);
});

enableDisplay(createBtn, customDefaultBtn);
enableDisplay(customTimerBtn, hiddenSetTimer);
enableDisplay(defaultTimerBtn, hiddenDefaultTimer);
disableDisplay(beginDefaultBtn);
disableDisplay(beginSetBtn);

const setBreakFunc = function (breakVal, delay, index) {
  let breakValue = breakVal;
  setTimeout(() => {
    const breakIntervel = setInterval(() => {
      breakValue -= 1;
      breakContainer[index].textContent = `${breakValue}`;
      if (breakValue == 0) {
        clearInterval(breakIntervel);
        breakContainer[index].style.background = "black";
        breakContainer[index].style.color = "white";
      }
    }, 60000);
  }, delay);
};

const setTimerFunc = function (timerVal, delay, index) {
  setTimeout(() => {
    let timerValue = timerVal;

    setInterval(() => {
      timerVal -= 1;
      timerContainer[index].setAttribute("class", "animation-class");
      timerContainer[index].textContent = `${timerVal}`;
    }, 60000);
  }, delay);
};
