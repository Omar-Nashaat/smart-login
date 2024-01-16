var userNameInput = document.querySelector('#userNameInput');
var emailInput = document.querySelector('#emailInput');
var passwordInput = document.querySelector('#passwordInput');
var signUpBtn = document.querySelector('#signUpBtn');
var userContainer = [];
var alertMessage = document.querySelector('#alertMessage');

if (localStorage.getItem('Users') != null) {
	userContainer = JSON.parse(localStorage.getItem('Users'));
}

function signUp() {
	var data = {
		userName: userNameInput.value,
		email: emailInput.value,
		password: passwordInput.value
	}
	if (checkEmpty() == true) {
		AlertMessage('All fileds are required', 'red');
	}
	else {
		if (checkExists() == true) {
			AlertMessage('Email is taken , try another one', 'red')
		}
		else {
			userContainer.push(data);
			localStorage.setItem('Users', JSON.stringify(userContainer));
			AlertMessage('Account created successfully', 'green');
			clearBox();
		}
	}
}

function AlertMessage(text, color) {
	alertMessage.classList.replace('d-none', 'd-block')
	alertMessage.innerHTML = text;
	alertMessage.style.color = color;
	alertMessage.style.textAlign = 'center';
}

function clearBox() {
	userNameInput.value = '';
	emailInput.value = '';
	passwordInput.value = '';
}

function checkEmpty() {
	if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
		return true;
	}
	else {
		return false;
	}
}

function checkExists() {
	for (var i = 0; i < userContainer.length; i++) {
		if (userContainer[i].email == emailInput.value) {
			return true;
		}
		else {
			return false;
		}
	}
}





signUpBtn.addEventListener('click', signUp);