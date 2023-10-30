
function registerForm() {
    event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");


    var userData = {
        name : name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }

    localStorage.setItem("userData", JSON.stringify(userData));
    var getUserData = JSON.parse(localStorage.getItem("userData"));

    console.log(userData)
}