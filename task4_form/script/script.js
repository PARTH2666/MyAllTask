let username = "";
document.getElementById("username").addEventListener("change", (event) => {
  username += event.target.value;
});

let email = "";
document.getElementById("email").addEventListener("change", (event) => {
  email += event.target.value;
});
let number = "";
document.getElementById("number").addEventListener("change", (event) => {
  number += event.target.value;
});
let password = "";
document.getElementById("password").addEventListener("change", (event) => {
  password += event.target.value;
});

document.getElementById("btn").addEventListener("click", (event) => {
  if (username.length <= 3) {
    showError_username(" username atleast have 3 character in username");
    event.preventDefault();
    username = "";
  } else {
    console.log("done");
  }
  if (email.length == 0) {
    showError_email("email feild is empty");
    event.preventDefault();
    email = "";
  } else {
    console.log("done");
  }

  if (number.length == 0) {
    showError_number("number feild is empty");
    event.preventDefault();
    number = "";
  } else {
    console.log("done");
  }

  if (password.length == 0) {
    showError_password("password feild is empty");
    event.preventDefault();
    password = "";
  } else {
    console.log("done");
  }
});
function showError_username(error) {
  `${error}`;
  document.querySelector(".error_msg_username").innerHTML = `${error}`;
}

function showError_email(error) {
  document.querySelector(".error_msg_email").innerHTML = `${error}`;
}
function showError_number(error) {
  document.querySelector(".error_msg_number").innerHTML = `${error}`;
}
function showError_password(error) {
  document.querySelector(".error_msg_password").innerHTML = `${error}`;
}


document.getElementById('password').addEventListener('click',()=>{
    document.querySelector(".error_msg_password").style.display = 'n'
})