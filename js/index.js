// Background Start
const images = ["00.jpg", "01.jpg", "02.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤 이미지

const bgImage = document.createElement("img"); // img 태그 생성
bgImage.src = `img/${chosenImage}`; // img 태그의 src 속성에 랜덤 이미지 값 삽입
bgImage.alt = "background-image";
bgImage.className = "background__image";

document.querySelector(".wrap-background").appendChild(bgImage); // body 태그에 bgImage에 담긴 img 태그 추가
// Background End

// Clock Start
const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// Clock End

// Login Start
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginId");
const welcomeBox = document.querySelector("#welcomeBox");
const welcomeMsg = document.querySelector("#welcomeMsg");

const LOGIN_FORM_SHOW = "content-center__login-form--show";
const WELCOME_BOX_SHOW = "content-center__welcome--show";
const KEY_USER_NM = "username";

function showWelcomeMsgBox(username) {
	welcomeBox.classList.add(WELCOME_BOX_SHOW);
	welcomeMsg.innerText = `Welcome ${username}`;
}

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.remove(LOGIN_FORM_SHOW);
	const username = loginInput.value;
	localStorage.setItem(KEY_USER_NM, username);

	showWelcomeMsgBox(username);
}

const savedUsername = localStorage.getItem(KEY_USER_NM);

window.onload = function () {
	if (savedUsername === null) {
		loginForm.classList.add(LOGIN_FORM_SHOW);
		loginForm.addEventListener("submit", onLoginSubmit);
	} else {
		showWelcomeMsgBox(savedUsername);
	}
};
// Login End
