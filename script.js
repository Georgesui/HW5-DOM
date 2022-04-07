const buttonElement = document.getElementById('popupBtn');
buttonElement.addEventListener('click', () => {
	const userEmail = document.getElementById('popup__user').value;
	const userPassword = document.getElementById('popup__password').value;
	document.getElementById('popup__text').innerHTML = 'Login: ' + userEmail + ' Password: ' + userPassword;
	localStorage.setItem('email', userEmail);
	localStorage.setItem('password', userPassword);
})
