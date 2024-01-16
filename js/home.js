var displayName = document.querySelector('#displayName');
var logOutBtn = document.querySelector('#logOutBtn');


if (localStorage.getItem('username') != null){
    displayName.innerHTML = `Welcome ${localStorage.getItem('username')}`;
}

function logOut(){
    window.location.href = 'index.html';
    localStorage.removeItem('username');
}

logOutBtn.addEventListener('click',logOut);