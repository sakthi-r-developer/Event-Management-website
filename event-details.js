let username = localStorage.getItem("username");

document.getElementById("navbarUser").innerText =
username;

// Logout
document
.getElementById("logoutBtn")
.addEventListener("click", function(){

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    window.location.href =
    "login.html";
});

// Login Check
let loggedIn =
localStorage.getItem("loggedIn");

if(loggedIn !== "true"){

    window.location.href =
    "login.html";
}

