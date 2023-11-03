
function registerForm() {
    event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (name.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Name shoud not be Empty',
        });
    }
    else if (email.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Email shoud not be Empty',
        });
    }
    else if (phoneNumber.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Phone Number shoud not be Empty',
        });
    } else if (password.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Password shoud not be Empty',
        });
    } else if (confirmPassword.value !== password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Confirm Password shoud be same as Password',
        });
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'Registered Successfully',
            showConfirmButton: false,
            timer: 3000
        })
        var userData = {
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }

        localStorage.setItem("userData", JSON.stringify(userData));
        setTimeout(() => {
            window.location.href = "./home.html"
        }, 2000)
    }


    var getUserData = JSON.parse(localStorage.getItem("userData"));

    console.log(getUserData)
}


function login() {

    event.preventDefault();
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var loginData = JSON.parse(localStorage.getItem("userData"));

    if (!loginData) {
        Swal.fire({
            icon: 'error',
            title: 'User Account not Found',
        });
        setTimeout(() => {
            window.location.href = "./index.html"
        }, 2000)
    }
    if (loginData.email !== email.value) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
        });
    }
    else if (loginData.password !== password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
        });
    }
    else {
        Swal.fire({
            icon: 'success',
            title: `${loginData.name} Successfully Login`,        
        })
        setTimeout(() => {
            window.location.href = "./home.html"
        }, 2000)
    }
}