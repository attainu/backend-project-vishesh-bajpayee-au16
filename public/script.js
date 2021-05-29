const dynamicColorDivs = document.getElementsByClassName("dynamic-color");
const dynamicBgDivs = document.getElementsByClassName("dynamic-background");

const updateLevels = (level) => {
  for (let index = 0; index < dynamicColorDivs.length; index++) {
    const div = dynamicColorDivs[index];
    if (level === 1) {
      div.style.color = "38B5C0";
    } else if (level === 2) {
      div.style.color = "A300A0";
    } else if (level === 3) {
      div.style.color = "FFBD00";
    }
  }

  for (let index = 0; index < dynamicBgDivs.length; index++) {
    const div = dynamicBgDivs[index];

    if (level === 1) {
      div.style.backgroundColor = "38B5C0";
    } else if (level === 2) {
      div.style.backgroundColor = "A300A0";
    } else if (level === 3) {
      div.style.backgroundColor = "FFBD00";
    }
  }
};

const backendUserDataHandler = async () => {
  const response = await fetch("/dashboard/data");
  const data = await response.json();
  const level = data[0].level;
  updateLevels(level);
};

backendUserDataHandler();
