const menuItem = document.querySelector(".menu-item:nth-of-type(1)");
const menuIcon = document.querySelector(".menu-item__icon");
const menuIconOpen = document.querySelector(".menu-item__icon-open");
const menuIconClose = document.querySelector(".menu-item__icon-close");
const todos = document.querySelector("#todos");
let menuIconFlag = false;

function handleTodoButton(e) {
	menuItem.classList.toggle("menu-item--on");
	menuIconOpen.classList.toggle("menu-item__icon-open--on");
	menuIconClose.classList.toggle("menu-item__icon-close--on");
	if (menuIconFlag) {
		menuIconFlag = false;
	} else {
		menuIconFlag = true;
	}
}

menuIcon.addEventListener("click", handleTodoButton);

const toDoForm = document.querySelector("#todoAdd");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todos");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodo() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
	const checked = newTodo.checked ? "todo-list__item--checked" : "";
	const tag = `
        <li id="${newTodo.id}" class="todo-list__item ${checked}">
            <div class="btn-checkbox"><i class="fa-solid fa-check"></i></div>
            <span>${newTodo.text}</span>
            <button class="btn-delete"><i class="fa-solid fa-xmark"></i></button>
        </li>
    `;

	toDoList.innerHTML += tag;
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";

	const newTodoObj = {
		id: Date.now(),
		text: newTodo,
		checked: false,
	};

	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveTodo();
}

function checkedTodo(li) {
	li.classList.toggle("todo-list__item--checked");
	toDos.forEach(function (value, index) {
		if (value.id === parseInt(li.id)) {
			if (value.checked) {
				toDos[index].checked = false;
			} else {
				toDos[index].checked = true;
			}
		}
	});
	saveTodo();
}

function deleteTodo(li) {
	li.remove();
	toDos = toDos.filter((value) => value.id !== parseInt(li.id));
	saveTodo();
}

function handleTodos(event) {
	event.preventDefault();
	let target;
	if (event.target.nodeName === "I") {
		target = event.target.parentNode;
	} else {
		target = event.target;
	}

	if (target.classList.contains("btn-checkbox")) {
		checkedTodo(target.parentNode);
	} else if (target.classList.contains("btn-delete")) {
		deleteTodo(target.parentNode);
	}
}

toDoForm.addEventListener("submit", handleToDoSubmit);
todos.addEventListener("click", handleTodos);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;

	parsedToDos.forEach(paintToDo);
}
