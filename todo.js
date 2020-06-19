const toDoForm = document.querySelector(".js-toDOForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  const span = document.createElement("span");
  span.innerText = text;

  //()의 값을 li의 자식으로 넣음.
  li.appendChild(delBtn);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);

  if (toDos != null) {
  }
}

function init() {
  loadToDos();

  toDoForm.addEventListener("submit", handleSubmit);
}

init();
