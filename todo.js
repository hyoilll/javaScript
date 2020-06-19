const toDoForm = document.querySelector(".js-toDOForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  //JSON.stringify(toDos) array의 내용물을 string으로 변환
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "delete";

  const span = document.createElement("span");
  span.innerText = text;

  const newId = toDos.length + 1;

  //()의 값을 li의 자식으로 넣음.
  li.appendChild(delBtn);
  li.appendChild(span);

  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);

  //localStorage에 list저장
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos != null) {
    //string to object
    const parsedToDos = JSON.parse(loadedToDos);

    // parsedToDos.forEach(function (toDo) {
    //   paintToDo(toDo.text);
    // });

    for (let i = 0; i < parsedToDos.length; ++i) {
      paintToDo(parsedToDos[i].text);
    }
  }
}

function init() {
  loadToDos();

  toDoForm.addEventListener("submit", handleSubmit);
}

init();
