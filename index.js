/////////////////////////// print (console.log, alert)

let a = 221;
const b = a - 5;

console.log(b, "+", a);

a = 5;

console.log(a);

alert(b);

let c = "hello world";
console.log(c);

/////////////////////////// data type (let, const, var)

const what = "hyo il";
console.log(what);

let wat = true;
console.log(wat); //true

wat = false;
console.log(wat); //false

wat = 333; //integer
console.log(wat);

wat = 3.5; //float
console.log(wat);

/////////////////////////// list (array, object)

//-> array
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon, tue, wed, thu, fri);

//ceate the array
//tupleみたいに様々なdata typeが入れる
//index_numberは０から始めます
const days_arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 333];

console.log(days_arr);
console.log(days_arr[1]);

//-> object
//structみたいね
const human_obj = { name: "hyo il", age: 28, gender: "male", isHandsome: true };

console.log(human_obj);
console.log(human_obj.name);

human_obj.name = "lee hyo il";

//objectを使わずにすぐ中身を変えられる
console.log(human_obj.name);

//-> obj + arr
const obj_arr = {
  name: "hyo il",
  age: "28",
  favFood: { name: "kimchi", fatty: false }, //object
  favColors: ["red", "blue", "yellow"], //array
};

console.log(obj_arr);

//object이기 때문에 => undefined
console.log(obj_arr[0]);
console.log(obj_arr[1]);
console.log(obj_arr[2]);
console.log(obj_arr[3]);

console.log(obj_arr.name);
console.log(obj_arr.age);

console.log(obj_arr.favColors);
console.log(obj_arr.favColors[0]);
console.log(obj_arr.favColors[1]);
console.log(obj_arr.favColors[2]);

console.log(obj_arr.favFood);
console.log(obj_arr.favFood.name);
console.log(obj_arr.favFood.fatty);

//-> arr + obj
const arr_obj = [
  1,
  2,
  3,
  (arr1 = [1, 2, 3]), //()がが追加される
  (obj1 = { 1: "1", 2: "2", 3: "3" }),
];

console.log(arr_obj);

console.log(arr_obj[0]);
console.log(arr_obj[1]);
console.log(arr_obj[2]);
console.log(arr_obj[3]);
console.log(arr_obj[4]);

console.log(arr_obj[3][0]); //1
console.log(arr_obj[3][1]); //2
console.log(arr_obj[3][2]); //3
console.log(arr_obj[3][3]); //undefined size over

//arr_obj[4].1が正しいけどなぜ[]に含められてるのかな
console.log(arr_obj[4][0]); //undefined
console.log(arr_obj[4][1]); //1
console.log(arr_obj[4][2]); //2
console.log(arr_obj[4][3]); //3
