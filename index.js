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