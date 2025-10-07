let Status = document.getElementById("Status");
let passwordM = document.getElementById("passwordM");
let passwordR = document.getElementById("passwordR");
let showPasswordM = document.getElementById("showPasswordM");
let showPasswordR = document.getElementById("showPasswordR");
let signupBtn = document.getElementById("signupBtn");
let email = document.getElementById("email");
let userName = document.getElementById("userName");

let passwordIsOk = false;

function checkPasswords() {
  if (passwordM.value === passwordR.value && passwordM.value !== "") {
    passwordIsOk = true;
    removeError("Passwords do not match");
  } else {
    passwordIsOk = false;
    addError("Passwords do not match");
  }
  updateStatus();
}

function showPassword(passwordx) {
  passwordx.type = passwordx.type === "password" ? "text" : "password";
}

function addError(message) {
  if (!Status.innerHTML.includes(message)) {
    Status.innerHTML += `<li>${message}</li>`;
  }
}

function removeError(message) {
  let errors = Status.innerHTML
    .split("</li>")
    .filter((error) => !error.includes(message) && error.trim() !== "")
    .map((error) => error + "</li>");
  Status.innerHTML = errors.join("");
}

function updateStatus() {
  if (Status.innerHTML.trim() === "") {
    Status.style.display = "none";
  } else {
    Status.style.display = "block";
    Status.style.color = "red";
  }
}

function validateFields() {
  if (userName.value === "" || userName.value.length < 4) {
    addError("Username must be at least 4 characters");
  } else {
    removeError("Username must be at least 4 characters");
  }

  if (
    email.value === "" ||
    !email.value.includes("@") ||
    email.value.length < 2
  ) {
    addError("Invalid email address");
  } else {
    removeError("Invalid email address");
  }

  checkPasswords();
}

userName.addEventListener("input", validateFields);
email.addEventListener("input", validateFields);
passwordM.addEventListener("input", validateFields);
passwordR.addEventListener("input", validateFields);

showPasswordM.addEventListener("click", () => showPassword(passwordM));
showPasswordR.addEventListener("click", () => showPassword(passwordR));

signupBtn.addEventListener("click", function () {
  validateFields();
  if (Status.innerHTML.trim() === "") {
    Status.innerHTML = "All inputs are valid. You can proceed!";
    Status.style.color = "green";
    Status.style.display = "block";
  }
});
