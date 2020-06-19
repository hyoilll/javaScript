const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  //event = preventDefault
  //input이 submit하게 되면 form이 웹서버로 보내려하기에
  //form 이벤트 막는 함수.
  event.preventDefault();

  const input_text = input.value;
  saveName(input_text);
  paintGreeting(input_text);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);

  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser == null) {
    //she is not
    askForName();
  } else {
    //she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
