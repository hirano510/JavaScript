alert('Hello World!');

console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle + 'です');

function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

let numTen = 10;
let strTen = '10';
console.log(numTen, strTen);

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)// 名前付きの関数を渡す時は、()を付けずに渡す

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();

let round = Math.round(2.86);// 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);// 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98);// 切り下げ
console.log('floor => ', floor);

let random = Math.random();// 0~1までの乱数の生成
console.log('random => ', random);

let userAge = 0;// 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;// ここは再代入するように変更
  console.log(userAge);// => 27がConsoleに表示される
}

console.log(userAge);// => 27がConsoleに表示される

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');