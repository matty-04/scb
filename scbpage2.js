document.getElementById("name").innerHTML = localStorage.getItem("username");

let sideBar = document.querySelector(".sidebar");


function sidebar(){
    sideBar.classList.toggle("sidebar-show");
}

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    localStorage.setItem("profile", profilePic.src);
}

let newPassword = document.getElementById("settings-password");

function settingsSaveButton(){
    localStorage.setItem("password", newPassword.value);
}

let settings = document.querySelector(".settings");

function settingsShow(){
    settings.classList.add("settings-show");
    overlay.classList.add("active-overlay");
}

function settingsClosed(){
    settings.classList.remove("settings-show");
    overlay.classList.remove("active-overlay");
}