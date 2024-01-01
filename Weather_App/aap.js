function registerForm() {

    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('cpassword');

    var userData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        confirmPassword: comfirmPassword.value
    }
    
}


// let passDisplay = document.getElementById("passDisplay");
// let btnNewPass = document.getElementById("newPass");

// let alphabets = "ABCDEFGHIQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";


// function generatePassword(){
//     let password = "";

   
//     for(let i = 0; i<=8 ; i++){

//         if(password.length == 8){
//         break;
//         }else if(password.length !== 8 && password.length < 8 ){
//             password+=alphabets[Math.floor(Math.random()*alphabets.length)]
           
//         }
//     }
  
    
//     passDisplay.innerText = password
//     console.log(password.length)
// }