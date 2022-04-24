const API_KEY = "2db8828425372100c046c42243cfbfd6";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	// console.log(lat, lng); // 37.2976397 127.01653
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather");
			const city = document.querySelector("#city");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 왼쪽 함수는 좌표를 가져오는데 성공한 경우, 오른쪽 함수는 가져오는데 실패한 경우
