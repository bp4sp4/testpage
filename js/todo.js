const toDoForm = document.getElementById("todo-form"); // id가 todo-form인 form 태그
const toDoInput = document.querySelector("#todo-form input");  // id가 todo-form에 속한 input 태그
const toDoList = document.getElementById("todo-list"); // id가 todo-list 인 ul 태그

const TODOS_KEY = "todos"

let toDos = [];

function saveTodosToLocalStorage() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 버튼 눌러서 삭제함수
function deleteToDo(event) {
    const li = event.target.parentElement; // 이벤트타겟의 부모객체를 찾음
    li.remove(); // 생성된 todolist li태그를 삭제함
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 클릭한 li.id와 다른 toDo는 남김
    saveTodosToLocalStorage();
}

// toDo를 그리는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li"); // li태그 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); // span태그 생성
    span.innerText = newTodo.text; // span에 newTodo 값 노출
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li에 span태그 생성
    li.appendChild(button);
    toDoList.appendChild(li); // todolist에 li태그 추가
}

// 인풋을 입력했을때 작동하는 함수
function handleToDoSubmit(event) {
    event.preventDefault(); // 입력했을때 새로고침 방지
    const newTodo = toDoInput.value; // input에서 얻은 값을
    toDoInput.value = ""; // 입력했을때 빈값을 노출
    const newTodoObj = {
        text :  newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj) // paintodo에 보낸다
    saveTodosToLocalStorage();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { // 로컬스트리지에 값이 있으면 저장해라
    const parsedToDos = JSON.parse(savedToDos); // 스트링을 어레이로 변환
    parsedToDos.forEach(paintToDo); // array의 각 item에 대해 function을 실행
}
