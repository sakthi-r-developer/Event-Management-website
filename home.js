let username = localStorage.getItem("username");

document.getElementById("welcomeText").innerText =
`Welcome to TechIf, ${username}!`;

document.getElementById("navbarUser").innerText =
username;

document
.getElementById("logoutBtn")
.addEventListener("click", function(){

    localStorage.removeItem(
        "loggedIn"
    );

    localStorage.removeItem(
        "username"
    );

    window.location.href =
    "login.html";
});

let loggedIn =
localStorage.getItem("loggedIn");

if(loggedIn !== "true"){

    window.location.href =
    "login.html";
}