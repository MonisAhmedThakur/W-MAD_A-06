import { auth, signInWithEmailAndPassword } from "./firebase.js"

const login = () => {
    const emailLogin = document.getElementById("emailLogin");
    const passwordLogin = document.getElementById("passwordLogin");

    signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user--->", user);
            window.location = "todo.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage", errorMessage)
        });

}


let loginBtn = document.getElementById("loginBtn");
if (loginBtn )
loginBtn && loginBtn.addEventListener("click", login)
