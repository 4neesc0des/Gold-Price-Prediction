//********** fixed navbar ***********

var navBar = document.getElementById("nav-bar");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navBarHeight = navBar.getBoundingClientRect().height;

  if(scrollHeight > navBarHeight){
    navBar.classList.add("nav-fixed");
  }else{
    navBar.classList.remove("nav-fixed");
  }
});

// *********** form validation **********

let signlogbtn = document.querySelectorAll(".sign-log-btn");
let formcontainer = document.querySelector(".form-container");
let main = document.querySelector(".main");
let signbtn = document.querySelectorAll(".sign-btn");
let signupbtn = document.querySelector(".signup-btn");
let loginbtn = document.querySelector(".login-btn");
let signupform = document.querySelector(".signUp-form");
let loginform = document.querySelector(".login-form");

for (let i = 0; i < signlogbtn.length; i++) {
  signlogbtn[i].addEventListener("click", function (e) {
    formcontainer.classList.toggle("off");
    main.classList.toggle("blur");
  });
}

let xbtn = document.querySelector(".x-btn");
xbtn.addEventListener("click", function (e) {
  formcontainer.classList.toggle("off");
  main.classList.toggle("blur");
});

for (let i = 0; i < signbtn.length; i++) {
  signbtn[i].addEventListener("click", function (e) {
    signupbtn.classList.toggle("change");
    loginbtn.classList.toggle("change");
    signupform.classList.toggle("display");
    loginform.classList.toggle("display");
  });
}

// form validation
const signupForm = document.querySelector(".signUp-form");
const formBtn = document.querySelector(".signBtn");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

const isEmail = function (e) {
  const pos = e.indexOf("@");
  if (pos === -1) {
    return false;
  } else if (e.lastIndexOf(".") <= pos + 3) {
    return false;
  } else if (e.lastIndexOf(".") == e.length - 1) {
    return false;
  } else if (e.charAt(e.length - 4) != "." && e.charAt(e.length - 3) != ".") {
    return false;
  } else {
    return true;
  }
};

const validation = function () {
  const fnameValue = firstName.value.trim();
  const lnameValue = lastName.value.trim();
  const unameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passValue = password.value.trim();

  if (fnameValue === "") {
    setErrorMessage(firstName);
  } else {
    setSuccessMessage(firstName);
  }

  if (lnameValue === "") {
    setErrorMessage(lastName);
  } else {
    setSuccessMessage(lastName);
  }

  if (unameValue === "") {
    setErrorMessage(userName);
  } else if (unameValue.length <= 5) {
    setErrorMessage(userName);
  } else {
    setSuccessMessage(userName);
  }

  if (emailValue === "") {
    setErrorMessage(email);
  } else if (!isEmail(emailValue)) {
    setErrorMessage(email);
  } else {
    setSuccessMessage(email);
  }

  if (passValue === "") {
    setErrorMessage(password);
  } else if (passValue.length < 8) {
    setErrorMessage(password);
  } else if (passValue.length > 16) {
    setErrorMessage(password);
  } else {
    setSuccessMessage(password);
  }
};

// login validation

const loginForm = document.querySelector(".login-form");
const formBtnlogin = document.querySelector(".login");
const emaillogin = document.querySelector(".email-login");
const passwordlogin = document.querySelector(".password-login");

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  validationlogin();
});

const validationlogin = function () {
  const emailValue = emaillogin.value.trim();
  const passValue = passwordlogin.value.trim();

  if (emailValue === "") {
    setErrorMessage(email);
  } else if (!isEmail(emailValue)) {
    setErrorMessage(email);
  } else {
    setSuccessMessage(email);
  }

  if (passValue === "") {
    setErrorMessage(password);
  } else if (passValue.length < 8) {
    setErrorMessage(password);
  } else if (passValue.length > 16) {
    setErrorMessage(password);
  } else {
    setSuccessMessage(password);
  }
};

const setErrorMessage = function (key) {
  key.className = key + " " + "fail";
  // console.log(key + " " + "fail");
};

const setSuccessMessage = function (key) {
  key.className = key + " " + "success";
  // console.log(key + " " + "success");
};

// **********  scroll top btn  ***********

const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 100) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
