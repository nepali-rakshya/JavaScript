// function display(sum) {
//   console.log("The sum is " + sum);
// }

// function sum(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return sum;
// }

// let value = sum(1, 2);
// display(value);

// function sum(a, b, callbackDisplay) {
//   let sum = a + b;
//   callbackDisplay(sum);
// }

// sum(1, 2, function display(sum) {
//   console.log("The sum is " + sum);
// });

// const myCalc = (
//   a,
//   b,
//   display = function (sum) {
//     console.log("The sum is " + sum);
//   }
// ) => {
//   let sum = a + b;
//   display(sum);
// };

// myCalc(1, 2);

// function display() {
//   console.log("hehe");
//   return "poo";
// }

// const display1 = () => display();

// const display2 = function () {
//   return display1();
// };

// console.log(display2());

// let rakPlay = new Promise((resolve, reject) => {
//   let name = prompt("What's your name?");
//   resolve((() => name)());
// });

// rakPlay // its a parameter not function
//   .then((result) => {
//     setTimeout(() => console.log(result), 1000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("I"), 2000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("like"), 3000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("you"), 4000);
//   });
