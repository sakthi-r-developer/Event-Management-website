let username =
localStorage.getItem("username");

document.getElementById("navbarUser").innerText =
username;

// Login Check

if(localStorage.getItem("loggedIn") !== "true"){

    window.location.href =
    "login.html";

}

// Logout

document
.getElementById("logoutBtn")
.addEventListener("click", function(){

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    window.location.href =
    "login.html";

});

// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Message Sent Successfully!"
    );

    this.reset();

});