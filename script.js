const form = document.querySelector("form");

const divFname = document.querySelector("#fname-div");
const fname = document.querySelector("#fname");

const divLname = document.querySelector("#lname-div");
const lname = document.querySelector("#lname");

const divEmail = document.querySelector("#email-div");
const email = document.querySelector("#email");
const emailEm = document.querySelector(".email-em");

const divPassword = document.querySelector("#password-div");
const password = document.querySelector("#password");

const submitButton = document.querySelector("#submit");


const emailError = [
  'Password cannot be empty',
  'This is not a valid email address'
];

const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


form.addEventListener('submit', (e) => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();


  if (fnameValue === "") {
    divFname.classList.add("error");
    e.preventDefault();
  } else {
    divFname.classList.remove("error");
  }

  if (lnameValue === "") {
    divLname.classList.add("error");
    e.preventDefault();
  } else {
    divLname.classList.remove("error");
  }

  if (emailRegEx.test(emailValue) === true) {
    divEmail.classList.remove("error");
    emailEm.innerText = null;
  } else if (emailValue === "") {
    divEmail.classList.add("error");
    emailEm.innerText = emailError[0];
    e.preventDefault();
  } else {
    divEmail.classList.add("error");
    emailEm.innerText = emailError[1];
    e.preventDefault();
  }

  if (passwordValue === "") {
    divPassword.classList.add("error");
    e.preventDefault();
  } else {
    divPassword.classList.remove("error");
  }

});
