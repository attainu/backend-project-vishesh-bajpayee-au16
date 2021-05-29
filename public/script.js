const dynamicColorDivs = document.getElementsByClassName("dynamic-color");
const dynamicBgDivs = document.getElementsByClassName("dynamic-background");
const getLevel = document.getElementById("levelFetch");
const colorsObj = {
  1: "38B5C0",
  2: "A300A0",
  3: "FFBD00",
  4: "FF950A",
  5: "E47362",
  6: "EF2D56",
  7: "0CCA4A",
  8: "84C318",
  9: "F52314",
};

const backendUserDataHandler = async () => {
  const response = await fetch("/profile/data");
  const data = await response.json();

  let level = data.level;
  console.log(`level color: ${colorsObj[level]}`);
  console.log(`user level" ${level}`);
  // dynamicColorChange(level);
};

const dynamicColorChange = (level) => {
  for (let index = 0; index < dynamicColorDivs.length; index++) {
    const div = dynamicColorDivs[index];
    div.style.color = colorsObj[level];
  }
  for (let index = 0; index < dynamicBgDivs.length; index++) {
    const div = dynamicBgDivs[index];
    div.style.backgroundColor = colorsObj[level];
  }

  console.log(level);
};

backendUserDataHandler();
