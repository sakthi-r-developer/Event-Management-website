document
.getElementById("forgotForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.getElementById("email").value;

    alert(
        "Password reset link sent to: " + email
    );
});