const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  // error class
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  // success class
    formControl.className = "form-control success";

   
}
// check email valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      // using back ticks instead of quotes `` ! ''
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${mix} characters`
    );
  } else {
    showSuccess(input);
  }
}

// get fieldname
function getFieldName(input) {
  // had t make first character upper case then attach the rest of the word onto it using index
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([name, email, message, subject]);
  // checking the length of user name and password
  // firs # min & second max
  checkLength(name, 2, 45);
  checkLength(subject, 2, 100);
  checkLength(message, 1, 300);
  checkEmail(email);
  
});


document.getElementsByClassName("form-control").innerHTML = `<div data - netlify="true"> </div>`;