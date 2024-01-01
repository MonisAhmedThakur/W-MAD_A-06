import { auth, onAuthStateChanged, signOut, sendEmailVerification } from "./firebase.js";


let name = document.getElementById("name");
let email = document.getElementById("email");
let main = document.getElementById("main");
let loader = document.getElementById("loader");

onAuthStateChanged(auth, (user) => {
    if (user) {
      sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log ("Email Send")
  });
      console.log("user--->", user)
      if (location.pathname != "/todo.html"){
      window.location = "todo.html";
      }
      loader.style.display = "none";
      main.style.display = "flex";
      name.innerHTML = user.email.slice(0,user.email.indexOf("@"));
      email.innerHTML = user.email;
    } else {
      console.log("not login")
      if (location.pathname != "/index.html" && location.pathname != "/register.html"){
        window.location = "index.html";
      }
    }
  });



  let logout = ()=>{
    signOut(auth).then(() => {
      console.log ("Sign-out successful");
      window.location = "index.html";
    }).catch((error) => {
      // An error happened.
      console.log ("error -- >", error ); 
    });
  
  }
  
  let logoutBtn = document.getElementById("logoutBtn");

  logoutBtn && logoutBtn.addEventListener("click", logout);