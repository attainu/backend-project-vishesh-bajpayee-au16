const generateRandomBtn = document.getElementById("generate-colors");
const saveBtn = document.getElementById("save-colors");
const color01 = document.getElementById("container01");
const color02 = document.getElementById("container02");
const color03 = document.getElementById("container03");
const color04 = document.getElementById("container04");
const color05 = document.getElementById("container05");
const colorCodes = document.querySelectorAll(".color-code");
const palletteNameInp = document.getElementById("pallette-name");
const savedWrapperPositionDiv = document.querySelector(".saved-colors-wrapper");

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
  payloadPbj = {
    colorArray: generateColorsFunc(),
  };
  await axios.post("/dashboard/colorpallette", payloadPbj);
  arr = payloadPbj;
});

saveBtn.addEventListener("click", async function () {
  savedWrapperPositionDiv.innerHTML += `<div class="saved-colors-container">
      <div
        style="background-color: ${payloadPbj.colorArray[0]} ;"
        class="color-saved"
      ></div>
      <div
        style="background-color: ${payloadPbj.colorArray[1]};"
        class="color-saved"
      ></div>
      <div
        style="background-color:${payloadPbj.colorArray[2]} ;"
        class="color-saved"
      ></div>
      <div
        style="background-color:${payloadPbj.colorArray[3]} ;"
        class="color-saved"
      ></div>
      <div
        style="background-color:${payloadPbj.colorArray[4]} ;"
        class="color-saved"
      ></div>
    </div>`;

  await axios.post("/dashboard/colorpallette/save-pallette", { a: 12 });
});
