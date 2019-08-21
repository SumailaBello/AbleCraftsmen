function validateLoginForm(){
    const status = document.getElementById('status');
//     var name =  document.getElementById('name').value;
// if (name == "") {
//     document.getElementById('status').innerHTML = "Name cannot be empty";
//     return false;
// }

let email =  document.getElementById('email').value;
if (email == "") {
    status.innerHTML = "Email cannot be empty";
    status.classList.remove("d-none")
    return false;
} else {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.getElementById('status').innerHTML = "Email format invalid";
        return false;
    }
}
let password =  document.getElementById('password').value;
if (password == "") {
    status.innerHTML = "Password cannot be empty";
    return false;
}

status.innerHTML = "Sending...";
status.classList.remove("bg-danger");
status.classList.remove("d-none");
document.getElementById('login-form').submit();
}

function validateRegisterForm(){
    const status = document.getElementById('status');
    let firstName =  document.getElementById('registerFirstName').value;
    if (firstName == "") {
    document.getElementById('status').innerHTML = "First name cannot be empty";
    return false;
}
    let lastName =  document.getElementById('registerLastName').value;
    if (lastName == "") {
    document.getElementById('status').innerHTML = "Last name cannot be empty";
    return false;
}

let email =  document.getElementById('registerEmail').value;
if (email == "") {
    status.innerHTML = "Email cannot be empty";
    status.classList.remove("d-none")
    return false;
} else {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.getElementById('status').innerHTML = "Email format invalid";
        return false;
    }
}
let password =  document.getElementById('registerPassword').value;
if (password == "") {
    status.innerHTML = "Password cannot be empty";
    return false;
}

// var subject =  document.getElementById('subject').value;
// if (subject == "") {
//     document.getElementById('status').innerHTML = "Subject cannot be empty";
//     return false;
// }

// var message =  document.getElementById('message').value;
// if (message == "") {
//     document.getElementById('status').innerHTML = "Message cannot be empty";
//     return false;
// }
status.innerHTML = "Sending...";
status.classList.remove("bg-danger");
status.classList.remove("d-none");
document.getElementById('register-form').submit();
}