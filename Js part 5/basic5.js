// for each method in array

// let num = [1, 2, 3, 4, 5, 6];
// let looped = num.forEach(arrayNumber);

// function arrayNumber(number) {
//   console.log(number);
// }

// num.forEach((number, index) => {
//   console.log(number + " " + index);
// });

// // Array from

// let name = "122324345";

// console.log(Array.from(name));

// *******************************************
// for of and for in loop

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// for (key in num) {
//   console.log(num[key]);
// }

// for (const key of num) {
//   console.log(key);
// }

// *************************************************

// MAP    FILTER    REDUCE

let num = [1, 2, 3, 5, 2, 1];

// num.forEach((number) => console.log(number));

let array2 = num.forEach((number) => {
  return number;
});
console.log(array2);

let array = num.map((number) => {
  return number;
});

// console.log(array.slice(1, 3));
console.log(array);

console.log(num.includes(4));

let array3 = num.filter((value) => {
  return value >= 4;
});
console.log(array3);

let array5 = num.reduce((a1, a2, a3) => {
  return a1 + a2 + a3;
});

console.log(array5);
