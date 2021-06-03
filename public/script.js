const generateRandomBtn = document.getElementById("generate-colors");
const saveBtn = document.getElementById("save-colors");
const color01 = document.getElementById("container01");
const color02 = document.getElementById("container02");
const color03 = document.getElementById("container03");
const color04 = document.getElementById("container04");
const color05 = document.getElementById("container05");
const colorCodes = document.querySelectorAll(".color-code");
const palletteNameInp = document.getElementById("pallette-name");
// vibrant colors
// function randomHsl() {
//   return "hsla(" + Math.random() * 360 + " 100%, 50%, 1)";
// }

// generate random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generateColorsFunc = function () {
  let randomColorArray = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ];
  color01.style.background = randomColorArray[0];
  color02.style.background = randomColorArray[1];
  color03.style.background = randomColorArray[2];
  color04.style.background = randomColorArray[3];
  color05.style.background = randomColorArray[4];

  for (let index = 0; index < colorCodes.length; index++) {
    const codeHeading = colorCodes[index];
    codeHeading.textContent = randomColorArray[index];
  }

  return randomColorArray;
};

generateRandomBtn.addEventListener("click", async function () {
  generateColorsFunc();
  const payloadPbj = {
    colorArray: generateColorsFunc(),
  };
  await axios.post("/dashboard/colorpallette", payloadPbj);
});
