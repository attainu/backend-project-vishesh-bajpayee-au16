const confirmPassword = document.getElementById("confirmpassword-inp");
const password = document.getElementById("password-inp");
const signupBtn = document.getElementById("signup-btn");
const confirmPaswordText = document.getElementById("confirmpassword-text");

let pasStr = "";
password.addEventListener("keyup", (e) => {
  pasStr = e.currentTarget.value;

  console.log(`Pass str: ${pasStr}`);
  validatePasswword();
});

let conpasStr = "";
confirmPassword.addEventListener("keyup", (e) => {
  conpasStr = e.currentTarget.value;
  console.log(`ConPas str : ${conpasStr}`);
  validatePasswword();
});

signupBtn.addEventListener("click", () => {
  if (pasStr === conpasStr) {
    signupBtn.removeAttribute("disabled");
  } else {
    alert("Password not matching, Try again");
  }
});

function validatePasswword() {
  if (pasStr === conpasStr) {
    signupBtn.removeAttribute("disabled");
    confirmPaswordText.style.color = "white";
  } else {
    // DOM PART
    confirmPaswordText.style.color = "crimson";
    // signupBtn.addAttribute("disabled");
    console.log("NOT MATCH");
  }
}

// if (pasStr !== "" && conpasStr !== "" && pasStr === conpasStr) {
//   signupBtn.removeAttribute("disabled");
// }
