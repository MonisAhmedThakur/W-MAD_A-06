import { auth, createUserWithEmailAndPassword, RecaptchaVerifier,signInWithPhoneNumber } from "./firebase.js"

// Registration User

let confirmation;
const register = () => {
    const phone = document.getElementById("phone");
    
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
            const appVerifier = window.recaptchaVerifier;
            console.log("phone", phone.value)
            signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier)
    .then((confirmationResult) => {
      
        console.log("SMS Sent")
        confirmation =  confirmationResult;
    }).catch((error) => {
      
        console.log("error-->", error)

    });

    // const email = document.getElementById("email");
    // const password = document.getElementById("password");

    // createUserWithEmailAndPassword(auth, email.value, password.value)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         console.log("user--->", user)
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log("errorMessage", errorMessage)
    //     });

}


let registerBtn = document.getElementById("registerBtn");
if (registerBtn)
    registerBtn && registerBtn.addEventListener("click", register)

let verify = () => {
    let otp = document.getElementById('otp');
    confirmation.confirm(otp.value).then((result) => {
        const user = result.user;
        console.log ("user -->", user)
    }).catch((error) => {
        console.log ("error -->", error)
    });
}


let otpVerify = document.getElementById("otpVerify");
if (otpVerify)
otpVerify && otpVerify.addEventListener("click", verify)
    
    







