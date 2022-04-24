// Login Start
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginId");
const welcomeBox = document.querySelector("#welcomeBox");
const welcomeMsg = document.querySelector("#welcomeMsg");
const menuBox = document.querySelector(".menu");

const LOGIN_FORM_SHOW = "content-center__login-form--show";
const WELCOME_BOX_SHOW = "content-center__welcome--show";
const MENU_BOX_SHOW = "menu--show";
const KEY_USER_NM = "username";

function showWelcomeMsgBox(username) {
	welcomeBox.classList.add(WELCOME_BOX_SHOW);
	welcomeMsg.innerText = `Welcome ${username}`;
}

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.remove(LOGIN_FORM_SHOW);
	menuBox.classList.add(MENU_BOX_SHOW);
	const username = loginInput.value;
	localStorage.setItem(KEY_USER_NM, username);

	showWelcomeMsgBox(username);
}

const savedUsername = localStorage.getItem(KEY_USER_NM);

if (savedUsername === null) {
	loginForm.classList.add(LOGIN_FORM_SHOW);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	showWelcomeMsgBox(savedUsername);
	menuBox.classList.add(MENU_BOX_SHOW);
}
// Login End
