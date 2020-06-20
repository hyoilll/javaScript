const toDoForm = document.querySelector(".js-toDOForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id != parseInt(li.id);
  });

  // for (let i = 0; i < toDos.length; ++i) {
  //   if (toDos[i].id == li.id) {
  //     toDos.splice(i, 1);
  //   }
  // }

  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //JSON.stringify(toDos) array의 내용물을 string으로 변환
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = text;

  const delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.addEventListener("click", deleteToDo);

  const newId = toDos.length + 1;

  //()의 값을 li의 자식으로 넣음.
  li.appendChild(span);
  li.appendChild(delBtn);

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

// const toDoForm = document.querySelector(".js-toDOForm");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// const toDos = [];

// function deleteToDos(item) {
//   for (let i = 0; i < toDos.length; ++i) {
//     if (toDos[i].id == item.id) {
//       toDos.splice(i, 1);
//     }
//   }
// }

// function deleteToDo(event) {
//   const li = event.target.parentNode;
//   toDoList.removeChild(li);
//   deleteToDos(li);
//   saveToDos();
// }

// function saveToDos() {
//   //JSON.stringify(toDos) array의 내용물을 string으로 변환
//   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function paintToDo(text) {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   delBtn.innerText = "delete";
//   delBtn.addEventListener("click", deleteToDo);

//   const span = document.createElement("span");
//   span.innerText = text;

//   const newId = toDos.length + 1;

//   //()의 값을 li의 자식으로 넣음.
//   li.appendChild(delBtn);
//   li.appendChild(span);

//   li.id = newId;

//   toDoList.appendChild(li);

//   const toDoObj = {
//     text: text,
//     id: newId,
//   };
//   toDos.push(toDoObj);

//   //localStorage에 list저장
//   saveToDos();
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = toDoInput.value;
//   paintToDo(currentValue);
//   toDoInput.value = "";
// }

// function loadToDos() {
//   const loadedToDos = localStorage.getItem(TODOS_LS);

//   if (loadedToDos != null) {
//     //string to object
//     const parsedToDos = JSON.parse(loadedToDos);

//     // parsedToDos.forEach(function (toDo) {
//     //   paintToDo(toDo.text);
//     // });

//     for (let i = 0; i < parsedToDos.length; ++i) {
//       paintToDo(parsedToDos[i].text);
//     }
//   }
// }

// function init() {
//   loadToDos();

//   toDoForm.addEventListener("submit", handleSubmit);
// }

// init();
