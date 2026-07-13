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

// Save Button

document
.getElementById("saveBtn")
.addEventListener("click", function(){

    let darkMode =
    document.getElementById("darkMode").checked;

    if(darkMode){

        document.body.classList.add("dark");

    }else{

        document.body.classList.remove("dark");

    }

    alert("Settings Saved!");

});