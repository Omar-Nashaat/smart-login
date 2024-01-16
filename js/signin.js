var userInput = document.querySelector('#username');
var passwordInput = document.querySelector('#password');
var signInpBtn = document.querySelector('#signInpBtn');
var userContainer = [];


if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}

function login() {
    if (checkEmpty() == true) {
        AlertMessage('All fields are required', 'red');
    }
    else {
        if (check() == true) {
            window.location.href = 'home.html';
        }
        else {
            AlertMessage('Wrong email or password', 'red');
        }
    }

}

function check() {
    for (var i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == userInput.value && userContainer[i].password == passwordInput.value) {
            localStorage.setItem('username', userContainer[i].email);
            return true;
        }
    }
    // If no matching user is found, return false outside the loop
    return false;
}


function AlertMessage(text, color) {
    alertMessage.classList.replace('d-none', 'd-block')
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
    alertMessage.style.textAlign = 'center';
}

function checkEmpty() {
    if (userInput.value == '' || passwordInput.value == '') {
        return true;
    }
    else {
        return false;
    }
}


signInpBtn.addEventListener('click', login);