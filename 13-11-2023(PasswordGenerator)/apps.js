function registerForm() {

    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');


    var userData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
    }
    
}

var pwdGen = document.getElementById("pwdGen");

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "@#$%&!><?";
var passLength = 12;
var password = "";

for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    password += alphabet.charAt(randomIndex);
}

    for (var i = 0; i < 3; i++) {

    randomIndex = Math.floor(Math.random() * numbers.length);
    password += numbers.charAt(randomIndex);
}
    for (var i = 0; i < 3; i++) {

    randomIndex = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters.charAt(randomIndex);
}

var exampleInputPassword1 = document.getElementById("exampleInputPassword1");

function btnSubmit() {
    event.preventDefault();
    exampleInputPassword1.value = password;
}