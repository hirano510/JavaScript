// === 基礎編 ===
//Q1変数
let nickname = '私のニックネームはごっしーです。';
let age = '年齢は28際です。';

console.log(nickname + age);


//Q2配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log('私の好きな言語は'+languages[0]+'です。次は'+languages[3]+'を勉強してみたいです。');


//Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


//Q4配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


//Q5四則計算
//年齢の合計値
let sumAges = playerList.reduce((acc, player) => acc + player.age, 0);

console.log(sumAges);

//年齢の平均値
let avergeAge = sumAges / playerList.length;

console.log(avergeAge);


//Q6関数
function sayHello() {
  return console.log('Hello');
}

sayHello();

let sayWorld = function() {
  return console.log('world');
}

sayWorld();


//Q7メソッド
Object.assign(user, {
  birthday: '2000-09-27',
  sayHello: function() {
    console.log('Hello!');
  }
});

console.log(user);
user.sayHello();


//Q8引数
let calc = {};

calc.add = function(x, y) {
  return console.log(x + y);
}

calc.subtract = function(x, y) {
  return console.log(x - y);
}

calc.multiply = function(x, y) {
  return console.log(x * y);
}

calc.divide = function(x, y) {
  return console.log(x / y);
}

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(20, 4);

//Q9返り値
calc.remainder = function(x, y) {
  return x % y;
}

console.log(`5を3で割った余りは ${calc.remainder(5, 3)}です。`);

//Q10スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);
//以上の記入でコンソールにエラーが発生する理由はスコープ（変数の有効範囲）に違反しているからです。変数は関数の外で定義するグローバル変数と関数の中で定義するローカルがあり今回の「x」はローカル変数にあたります。関数内でしか参照することができない変数のため関数の外でコンソールすると参照元が見つからずエラーが発生します。



// === 応用編 ===
//Q1標準組み込みオブジェクト
let randomNumber = Math.floor(Math.random() * 9);
console.log(randomNumber);


//Q2コールバック関数
setTimeout(() => {
  console.log('Hello World!');
}, 3000);


//Q3if
let num = 3;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num == 0) {
  console.log('num is 0');
}


//Q4for
let numvers = [];

for (let i =0; i < 100; i++) {
  numvers.push(i);
}

console.log(numvers);


//Q5 for×if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < 7; i++) {
  if (typeof mixed[i] !== 'number') {
    console.log('not number')
  }else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else if (mixed[i] % 2 === 1) {
    console.log('odd');
  }
}
