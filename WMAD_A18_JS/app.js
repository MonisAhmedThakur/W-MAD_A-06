function submitForm(){
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var emailAddress = document.getElementById("email");
    var messagePost = document.getElementById("post");
    if (firstName.value.trim() && lastName.value.trim() && email.value && messagePost.value) {
        console.log(firstName.value);
        console.log(lastName.value/*, "<br>"*/);
        console.log(emailAddress.value/*, "<br>"*/);
        console.log(messagePost.value);
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        messagePost.value = "";
    }
    else {
        document.write("Please Fill the given Fields");
    }
}
 

// }
function colorRed(){
    var red = document.getElementById("color-bg")
    red.style.backgroundColor='#ff0000';
}


function colorYellow(){
    var yellow = document.getElementById("color-bg")
    yellow.style.backgroundColor='#ffff00';

}



