let answer;
let firstNumber;
let secondNumber;

// generates human test
// generates human test
function humanTest() {
    // possible numbers for the human test question
    const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // question display element
    const question = document.getElementById("question");
    // generating random numbers
    const firstIndex = Math.floor(Math.random() * numbers.length);
    firstNumber = numbers[firstIndex];

    const secondIndex = Math.floor(Math.random() * numbers.length);
    secondNumber = numbers[secondIndex];
    question.innerHTML = numbers[firstNumber] + " + "+numbers[secondNumber];
    // calculating answer
    answer = firstNumber + secondNumber;
    // converting answer to string
    answer = answer.toString();
}
humanTest();

// validates login form
function validateLoginForm(){
    // form status display element
    const status = document.getElementById('status');

    // preventing default form submit event
    document.getElementById('login-form').addEventListener("submit", (e)=>{
        e.preventDefault();
        // do something
     });
    
    const email =  document.getElementById('email').value;
    if (email == "") {
        // displaying status element
    status.classList.remove("d-none");
    // setting status message
    status.innerHTML = "Email cannot be empty";
    // setting red background
    status.classList.add("bg-danger");
    return false;
    } else {
        // regular expression for email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        // setting form status message
        status.innerHTML = "Email format invalid";
        status.classList.add("bg-danger");
        return false;
    }
}
    const password =  document.getElementById('password').value;
    if (password == "") {
        // setting form status message
    status.classList.remove("d-none");
    status.innerHTML = "Password cannot be empty";
    status.classList.add("bg-danger");
    return false;
    }

    const userAnswer = document.getElementById('answer').value;
    if (answer != userAnswer || answer == ""){
        // setting status message after checking user answer to human test
        status.classList.remove("d-none");
        status.innerHTML = "Failed human test. Try Again!";
        status.classList.add("bg-danger");
        humanTest();
        return false;
    }

    status.innerHTML = "Sending...";
    status.classList.remove("bg-danger");
    status.classList.remove("d-none");

    // ENABLE THIS WHEN READY TO TO SUBMIT THE FORM
    // document.getElementById('login-form').submit();
}

// validates registration form
function validateRegisterForm(){
    // form status display element
    const status = document.getElementById('status');

    // preventing default form submit event
    document.getElementById('register-form').addEventListener("submit", (e)=>{
        e.preventDefault();
        // do something
     });
    const firstName =  document.getElementById('registerFirstName').value;
    if (firstName == "") {
        // setting form status message based on condition
        status.classList.remove("d-none");
        status.innerHTML = "First name cannot be empty";
        status.classList.add("bg-danger");
        return false;
    }
    const lastName =  document.getElementById('registerLastName').value;
    if (lastName == "") {
        // setting form status message
        status.classList.remove("d-none");
        status.innerHTML = "Last name cannot be empty";
        status.classList.add("bg-danger");
        return false;
    }

    const email =  document.getElementById('registerEmail').value;
    if (email == "") {
        // setting form status message
    status.innerHTML = "Email cannot be empty";
    status.classList.remove("d-none");
    status.classList.add("bg-danger");
    return false;
    } else {
        // regular expression for email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.getElementById('status').innerHTML = "Email format invalid";
        return false;
    }
}
    const password =  document.getElementById('registerPassword').value;
    if (password == "") {
        // setting form status display element
    status.classList.remove("d-none");
    status.innerHTML = "Password cannot be empty";
    status.classList.add("bg-danger");
    return false;
    }

    else{
    // setting form final status message
    status.innerHTML = "Sending...";
    status.classList.remove("bg-danger");
    status.classList.remove("d-none");

    // ENABLE THIS WHEN READY TO TO SUBMIT THE FORM
    // document.getElementById('register-form').submit();
    }
}