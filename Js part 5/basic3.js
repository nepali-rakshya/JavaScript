// // let value = parseInt(prompt("Enter a range"));
// // let sum = 0;
// // for (let i = 0; i < value; i++) {
// //   sum += i + 1;
// // }

// // console.log(sum);

// // const marks = {
// //   rakshya: 100,
// //   aadarsha: 99,
// //   navin: 98,
// //   sita: 77,
// //   chiranjibi: 40,
// // };

// // for (m in marks) {
// //   console.log(m + " " + marks[m]);
// // }

// // let arr = ["hehe", "hello", "rakshya", 6000];

// // for (mrBeast of arr) {
// //   console.log(mrBeast);
// // }

// // for (mrBeast in arr) {
// //   console.log(mrBeast);
// //   console.log(arr[mrBeast]);
// // }

// // let i = 1;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i == 0);

// function sum(ram, b, c, d) {
//   let num1 = (ram + b) / 2;
//   let num2 = (b + c) / 2;
//   let num3 = (c + d) / 2;

//   console.log(Math.round(num1) + " " + num2 + " " + num3);
// }

// sum(1, 2, 3, 4);

// const mul = (a, b) => {
//   console.log(a * b);
// };
// mul(3, 8);

// const sub = (a, b) => {
//   console.log(a - b);
// };

// sub(10, 5);

// const obj = {
//   // names: "rakshya",
//   hobby: () => {
//     console.log("I love coding");
//   },
// };

// for (key in obj) {
//   obj[key]();
// }

// const obj = {
//   harry: 98,
//   rohan: 45,
//   rakshya: 99,
// };

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   let display = Object.keys(obj)[i];
//   console.log(Object.keys(obj)[i] + " " + obj[display]);
// }
// console.log("");
// console.log("**********Using for in loop************");
// console.log("");

// for (const key in obj) {
//   console.log(key + " " + obj[key]);
// }

// let i = 0;
// while (i >= 0) {
//   let guess = parseInt(prompt("Guess the lukcy num"));
//   let luckyNum = 10;
//   if (guess === luckyNum) {
//     console.log("You are one lucky kid");
//     break;
//   } else {
//     console.log("Try again");
//     // continue;
//   }
//   i++;
// }

// let ln = 3;
// let j;
// while (j != ln) {
//   j = prompt("Enter a number");
//   console.log("Try again");
// }

// console.log("You did it");

const num = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(num(1, 2, 3, 4, 5));

function num1(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

const values = num1(1, 2, 3, 4, 5);

console.log(values);
