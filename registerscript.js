<<<<<<< HEAD
function togglePassword(inputId, eyeId){

    const input =
    document.getElementById(inputId);

    const eye =
    document.getElementById(eyeId);

    if(input.type === "password"){

        input.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    }else{

        input.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}

document
.getElementById("registerForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    let terms =
    document.getElementById("terms").checked;

    if(password !== confirmPassword){

        alert("Passwords do not match");
        return;
    }

    if(!terms){

        alert("Please accept Terms & Conditions");
        return;
    }

    alert("Registration Successful");
=======
function togglePassword(inputId, eyeId){

    const input =
    document.getElementById(inputId);

    const eye =
    document.getElementById(eyeId);

    if(input.type === "password"){

        input.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    }else{

        input.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}

document
.getElementById("registerForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    let terms =
    document.getElementById("terms").checked;

    if(password !== confirmPassword){

        alert("Passwords do not match");
        return;
    }

    if(!terms){

        alert("Please accept Terms & Conditions");
        return;
    }

    alert("Registration Successful");
>>>>>>> fd8d6aa963f7cc97d1f0627ed0ef432acc3acc90
});