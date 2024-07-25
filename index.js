let showLoginbtn = document.querySelector(".top-login");
let closeLoginbtn = document.querySelector(".close-top-login");
let modal = document.querySelector(".modal-box");
let overlay = document.querySelector(".overlay");
let wrap = document.querySelector(".wrap");
let signUpbtn = document.querySelector(".top-signup")
let signupModal = document.querySelector(".sign-up-modal")
let signUpbtnclose = document.querySelector(".sign-up-cancel-btn");

showLoginbtn.addEventListener("click", () => modal.classList.add("show-modal"));
showLoginbtn.addEventListener("click", () => overlay.classList.add("active-overlay"));
closeLoginbtn.addEventListener("click", () => modal.classList.remove("show-modal"));
closeLoginbtn.addEventListener("click", () => overlay.classList.remove("active-overlay"));
signUpbtn.addEventListener("click", () => signupModal.classList.add("show-signup-modal"));
signUpbtn.addEventListener("click", () => overlay.classList.add("active-overlay"));
signUpbtnclose.addEventListener("click", () => signupModal.classList.remove("show-signup-modal"));
signUpbtnclose.addEventListener("click", () => overlay.classList.remove("active-overlay"));

//web storage sign up

let signUpUsername = document.querySelector(".sign-up-email");
let signUpPassword = document.querySelector(".sign-up-password");
let signUpButtonModal = document.querySelector(".sign-up-modal-btn");

function signUpBtn(){
    localStorage.setItem("username", signUpEmail = document.getElementById("sign-up-email").value);
    localStorage.setItem("password", signUpPassword = document.getElementById("sign-up-password").value);
}

//web storage log in

let logInUsername = document.querySelector(".modal-box-username");
let logInPassword = document.querySelector(".modal-box-password");
let logInButton = document.querySelector(".modal-login-button");

function logInBtn(){
    // if(logInUsername.value == '' || logInUsername.value == null || logInPassword.value == '' || logInPassword.value == null){
    //     alert("fill the blanks")
    // } else {
    //     logInButton.addEventListener("click", () => modal.classList.remove("show-modal"));
    //     logInButton.addEventListener("click" , () => overlay.classList.remove("active-overlay"));
    // }

    if(logInUsername.value != localStorage.getItem("username") || logInPassword.value != localStorage.getItem("password")){
        alert("Wrong Username or Password");
    } else {
        window.location.replace("scbpage2.html");
    }
}