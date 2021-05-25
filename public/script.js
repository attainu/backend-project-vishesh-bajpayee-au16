const wrapper = document.getElementsByClassName("profile-wrapper");
const icon = document.getElementsByTagName("i");
const heading = document.getElementsByTagName("h1");
const number = document.getElementsByTagName("h2");
for (let index = 0; index < wrapper.length; index++) {
  const element = wrapper[index];
  element.addEventListener("mouseenter", () => {
    element.style.background = "crimson";
    console.log("hover");
  });

  element.addEventListener("mouseleave", () => {
    element.style.background = "white";
    console.log("out");
  });
}
