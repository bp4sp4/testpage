const loginForm =  document.querySelector("#login-form"); // id값이 login-form인 form
const loginInput = document.querySelector("#login-form input"); // id 값이 login-form의 input
const greeting = document.querySelector("#greeting"); // id값이 greeting인 h1 태그

const HiDDEN_CLASSNAME = "hidden"; // 히든이 중복으로 사용되기 때문에 오타방지
const USERNAME_KEY = "username"; // 유저네임이 중복으로 사용되기 떄문에 오타방지

// form login 버튼을 눌렀을때 발생하는 이벤트
function onLoginSubmit(event) {
    // 브라우저를 이벤트를 막음
    event.preventDefault();
    // 로그인폼의 input 클래스 히든을 표시
    loginForm.classList.add(HiDDEN_CLASSNAME);
    // 유저 정보를 저장함
    const username = loginInput.value;
    // 새로고침할떄마다 username을 가져옴
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);

}
// 유저이름을 알고 있으면 h1태그와 같이 나타남 그리고 hidden 클래스는 사라짐
function paintGreetings(username) {
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HiDDEN_CLASSNAME);
}
// 로그인폼의 버튼을 눌렀을떄
loginForm.addEventListener("submit", onLoginSubmit);

// savedUsername변수명을 만들어 로컬스트리지에 유저이름을 저장
const savedUsername = localStorage.getItem("USERNAME_KEY")

// 로컬스토리지에 유저이름이 없으면 null 일때 로그인폼의 히든클래스를 사라지게하고 나타남
if(savedUsername === null) {
    // show the for
    loginForm.classList.remove(HiDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // 로컬스트리지에 유저이름이 저장되어 있으면 h1 태그로 나타남  
    // show th e greetings
    paintGreetings(savedUsername);
}
