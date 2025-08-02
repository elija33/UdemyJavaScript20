const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show input success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Checking email is valid
function isEmailValid(email) {
  let emailchecking =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailchecking.test(String(email).toLowerCase());
}

// password length
const passwordlength = 17;

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // checking for username
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  // checking for email
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isEmailValid(email.value)) {
    showError(email, "Invalid Email");
  } else {
    showSuccess(email);
  }

  // password
  if (password.value === "") {
    showError(password, "Password is required");
  } else if (
    password.value.length <= 7 &&
    password.value.length !== passwordlength
  ) {
    showError(password, "Password is too short");
  } else {
    showSuccess(password);
  }

  // confirming password
  if (confirmpassword.value === "") {
    showError(confirmpassword, "Confirm password is required");
  } else if (confirmpassword.value !== password.value) {
    showError(confirmpassword, "password does not match");
  } else {
    showSuccess(confirmpassword);
  }
});
