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

let rakPlay = new Promise((resolve, reject) => {
  let name = prompt("What's your name?");
  resolve((() => name)());
});

rakPlay // its a parameter not function
  .then((result) => {
    // const display = (result) => {
    setTimeout(() => console.log("love you " + result), 2000);
    // };
    // display;
  });

//   .then((result2) => result2 + " love")
//   .then((result3) => {
//     // let value = prompt("Anything else?");

//     console.log(result3 + " you ");
//   });

// setTimeout(() => {
//   console.log("love you");
// }, 1000);
