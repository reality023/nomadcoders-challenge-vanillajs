// Background Start
const images = ["00.jpg", "01.jpg", "02.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤 이미지

const bgImage = document.createElement("img"); // img 태그 생성
bgImage.src = `img/${chosenImage}`; // img 태그의 src 속성에 랜덤 이미지 값 삽입
bgImage.alt = "background-image";
bgImage.className = "background__image";

document.querySelector(".wrap-background").appendChild(bgImage); // body 태그에 bgImage에 담긴 img 태그 추가
// Background End
