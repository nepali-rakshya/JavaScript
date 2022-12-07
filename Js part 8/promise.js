// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, (i + 5) * 1000);
// }

// var i = 5;

// setTimeout(() => {
//   for (var i = 0; i <= 5; i++) {
//     console.log(i);
//   }
//   console.log("The value of i is " + i);
// }, i * 1000);
// console.log("The timer value is " + i);

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }

// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i]);
//   }, i * 1000);
// }

// var array = [1, 2, 3, 4, 5];
// for (var i = 0; i < array.length; i++) {
//   delay(i);
// }
// function delay(i) {
//   setTimeout(() => {
//     console.log(array[i]);
//   }, 1000);
// }

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("count ", j);
    }, 1000);
  })(i);
}

// IIFE = Immediately-Invoked Function Expression
