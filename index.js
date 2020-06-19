/////////////////////////// print (console.log, alert)

// let a = 221;
// const b = a - 5;

// console.log(b, "+", a);

// a = 5;

// console.log(a);

// alert(b);

// let c = "hello world";
// console.log(c);

/////////////////////////// data type (let, const, var)

// const what = "hyo il";
// console.log(what);

// let wat = true;
// console.log(wat); //true

// wat = false;
// console.log(wat); //false

// wat = 333; //integer
// console.log(wat);

// wat = 3.5; //float
// console.log(wat);

/////////////////////////// list (array, object)

//-> array
// const mon = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";

// console.log(mon, tue, wed, thu, fri);

// //ceate the array
// //tupleみたいに様々なdata typeが入れる
// //index_numberは０から始めます
// const days_arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 333];

// console.log(days_arr);
// console.log(days_arr[1]);

// //-> object
// //structみたいね
// const human_obj = { name: "hyo il", age: 28, gender: "male", isHandsome: true };

// console.log(human_obj);
// console.log(human_obj.name);

// human_obj.name = "lee hyo il";

// //objectを使わずにすぐ中身を変えられる
// console.log(human_obj.name);

// //-> obj + arr
// const obj_arr = {
//   name: "hyo il",
//   age: "28",
//   favFood: { name: "kimchi", fatty: false }, //object
//   favColors: ["red", "blue", "yellow"], //array
// };

// console.log(obj_arr);

// //object이기 때문에 => undefined
// console.log(obj_arr[0]);
// console.log(obj_arr[1]);
// console.log(obj_arr[2]);
// console.log(obj_arr[3]);

// console.log(obj_arr.name);
// console.log(obj_arr.age);

// console.log(obj_arr.favColors);
// console.log(obj_arr.favColors[0]);
// console.log(obj_arr.favColors[1]);
// console.log(obj_arr.favColors[2]);

// console.log(obj_arr.favFood);
// console.log(obj_arr.favFood.name);
// console.log(obj_arr.favFood.fatty);

// //-> arr + obj
// const arr_obj = [
//   1,
//   2,
//   3,
//   (arr1 = [1, 2, 3]), //()がが追加される
//   (obj1 = { 1: "1", 2: "2", 3: "3" }),
// ];

// console.log(arr_obj);

// console.log(arr_obj[0]);
// console.log(arr_obj[1]);
// console.log(arr_obj[2]);
// console.log(arr_obj[3]);
// console.log(arr_obj[4]);

// console.log(arr_obj[3][0]); //1
// console.log(arr_obj[3][1]); //2
// console.log(arr_obj[3][2]); //3
// console.log(arr_obj[3][3]); //undefined size over

// //arr_obj[4].1が正しいけどなぜ[]に含められてるのかな
// console.log(arr_obj[4][0]); //undefined
// console.log(arr_obj[4][1]); //1
// console.log(arr_obj[4][2]); //2
// console.log(arr_obj[4][3]); //3

/////////////////////////////////////function

//파라매타 자료형 안써줘도 됨
//함수의 반환값은 변수자료형처럼 모든 자료형인듯
// function sayHello(input1, input2) {
//   //띄어쓰기를 따로 명시해줘야 함
//   //hello bye 15
//   console.log("hello" + " " + input1 + " " + input2);

//   //띄어쓰기를 따로 명시 안해줘도 ,가 띄어쓰기 생성해줌
//   //hello bye 15
//   console.log("hello", input1, input2);

//   //스트링 사이사이 띄어쓰기를 생성해줌
//   //hello bye hello 15
//   console.log(`hello ${input1} hello ${input2}`);

//   return `my name is ${input1}`;
// }

// sayHello("bye", 15);

// const greetHyoil = sayHello("hyoil", 28);

// console.log(greetHyoil);

// // -> object에 변수가 아닌 함수를 넣으면 class처럼 동작

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
//   mod: function (a, b) {
//     return a % b;
//   },
// };

// console.log(calculator.plus(5, 5));
// console.log(calculator.sub(5, 5));
// console.log(calculator.mul(5, 5));
// console.log(calculator.div(5, 5));
// console.log(calculator.mod(7, 5));

//////////////////////////////////////////// - > html + javaScript
//DOM = Document Object Module
//event sourse -> https://developer.mozilla.org/ko/docs/Web/Events
// const title = document.querySelector("#title");

// console.log(title);

// title.innerHTML = "hyo il";

// console.dir(title);

// title.style.color = "red";
// title.style.display = "flex";
// title.style.justifyContent = "center";

// console.dir(document);

// document.title = "hyoil";

// function handleResize() {
//   console.log("I have been resized");
// }

// //title : red -> blue / blue -> red
// function handleClick() {
//   if (title.style.color == "red") {
//     title.style.color = "blue";
//   } else {
//     title.style.color = "red";
//   }
// }

// function handleMouseEnter() {
//   if (title.textContent == "hyo il") {
//     title.innerHTML = "mouseEnter";
//   } else {
//     title.innerHTML = "hyo il";
//   }
// }

// //window크기가 변경되면 handleResize함수를 작동시켜라
// //but handleResize()라고 하면 처음부터 실행이되고
// //handleReize라고하면 이벤트 발생시에만 실행이됨.
// window.addEventListener("resize", handleResize);

// title.addEventListener("click", handleClick);

// title.addEventListener("mouseenter", handleMouseEnter);

// // -> if else

// const num = 0;

// if (num == 1) {
//   console.log("num == 1");
// } else if (num > 1) {
//   console.log("num > 1");
// } else {
//   console.log("num < 1");
// }

/////////////////////////////////////////// seperate html css javascript

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const flag = title.classList.contains(CLICKED_CLASS);

  // if (flag == false) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }

  // ==

  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
