let username =
localStorage.getItem("username");

document.getElementById("navbarUser").innerText =
username;

document
.getElementById("logoutBtn")
.addEventListener("click", function(){

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("username");

    window.location.href =
    "login.html";
});

let loggedIn =
localStorage.getItem("loggedIn");

if(loggedIn !== "true"){

    window.location.href =
    "login.html";
}

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Registration Successful!");

    window.location.href = "event-details.html";

});