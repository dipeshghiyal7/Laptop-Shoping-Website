
function resizeFormContainer() {
  var formContainer = document.getElementById("main");
  var sContainer = document.getElementById("signup");
  var lContainer = document.getElementById("login");

  var formHeight = formContainer.querySelector("form").clientHeight;
  var sHeight = sContainer.querySelector("form").clientHeight;
  var lHeight = lContainer.querySelector("form").clientHeight;
  
  formContainer.style.height = formHeight + "px";
  sContainer.style.height = sHeight + "px";
  lContainer.style.height = lHeight + "px";
}

window.addEventListener("resize", resizeFormContainer);


function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  // Validate email
  if (!emailRegex.test(email) || email.trim() === '') {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
    document.getElementById("email").classList.add("invalid");
    resizeFormContainer();
  } else {
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("email").classList.remove("invalid");
  }

    // Validate password
if (!passwordRegex.test(password) || password.trim() === '') {
  document.getElementById("password-error").innerHTML = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.";
  document.getElementById("password").classList.add("invalid");
  resizeFormContainer();
} else {
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("password").classList.remove("invalid");
}
}

