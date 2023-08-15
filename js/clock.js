const clock = document.querySelector("h2#clock");


//함수 실행방식
function getClock() {
    // padstart() String 이 가져야할 길이를 2로 설정하고  그렇지 않다면 String 앞쪽에 0을 추가
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //브라우저 실행 되면 함수 자동실행
setInterval(getClock, 1000); // 매초마다 getClock 재실행