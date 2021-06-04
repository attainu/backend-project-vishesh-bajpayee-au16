const generateRandomBtn = document.getElementById("generate-colors");
const saveBtn = document.getElementById("save-colors");
const color01 = document.getElementById("container01");
const color02 = document.getElementById("container02");
const color03 = document.getElementById("container03");
const color04 = document.getElementById("container04");
const color05 = document.getElementById("container05");
const colorCodes = document.querySelectorAll(".color-code");
const savedWrapperPositionDiv = document.querySelector(".saved-colors-wrapper");
const popupSaved = document.getElementById("pallete-saved-popup");
const colorContainers = document.querySelectorAll(".color-container");
// generate random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateRandomBtn.addEventListener("click", function () {
  randomColors = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ];

  color01.style.background = `${randomColors[0]}`;
  color02.style.background = `${randomColors[1]}`;
  color03.style.background = `${randomColors[2]}`;
  color04.style.background = `${randomColors[3]}`;
  color05.style.background = `${randomColors[4]}`;

  for (let index = 0; index < colorCodes.length; index++) {
    const codes = colorCodes[index];
    codes.textContent = randomColors[index];
  }
});

saveBtn.addEventListener("click", async function () {
  console.log(randomColors);
  const payload = {
    randomColorsArr: randomColors,
  };
  setInterval(() => {
    popupSaved.style.display = "block";
  }, 5000);
  await axios.post("/dashboard/colorpallette/", payload);

  console.log("Clicked");
});

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
for (let index = 0; index < colorContainers.length; index++) {
  const container = colorContainers[index];
  const textArea = colorCodes[index];
  container.addEventListener("click", function (event) {
    copyToClipboard(textArea.textContent);
  });
}
