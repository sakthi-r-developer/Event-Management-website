function togglePassword(){

    const password =
    document.getElementById("password");

    const eye =
    document.getElementById("eye");

    if(password.type === "password"){

        password.type = "text";
        eye.innerHTML = "🙈";

    }else{

        password.type = "password";
        eye.innerHTML = "👁️";

    }
}
document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "sakthi" &&
       password === "1234"){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "username",
            username
        );

        window.location.href =
        "home.html";

    }else{

        alert(
            "Invalid Username or Password"
        );
    }

});