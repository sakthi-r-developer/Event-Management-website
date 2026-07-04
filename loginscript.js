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