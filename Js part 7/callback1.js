// // https://cdn.jsdeliver.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js

// function loadScript(src, welcome, bye) {
//   let newS = document.createElement("script");
//   document.body.append(newS);
//   newS.setAttribute("src", src);
//   console.log("The src is " + src);
//   newS.onload = () => {
//     console.log("Everything is good");
//     welcome(null, src);
//   };
//   newS.onerror = () => {
//     welcome(new Error("Invalid"));
//   };
//   bye();
// }

// function welcome(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("Welcome to hollywood" + src);
// }

// function bye() {
//   console.log("Ba-Bye");
// }

// loadScript(
//   "https://cdn.jsdeliver.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//   welcome,
//   bye
// );

// function squareNumbers(number) {
//   console.log(`Squared number = ${number * number}`);
// }

// function addNumbers(number1, number2) {
//   return number1 + number2;
// }

// function useCallbackForNumbers(callbackAdd, callbackSquare) {
//   const sumOfNumbers = callbackAdd(arguments[2], arguments[3]);
//   callbackSquare(sumOfNumbers);
// }

// useCallbackForNumbers(addNumbers, squareNumbers, 3, 3);

// abc();

// (function abc() {
//   console.log("heheh");
// })(); // function declaration

// const rak = () => {
//   console.log("hoho");
// }; // arrow function

// rak();

// const sak = function () {
//   console.log("huhuhu");
// }; // function expression
// sak();

// let start = new Date().getTime();
// let end = new Date().getTime();
// // while (new Date().getTime() - start < 5000);
// console.log("all done");
// console.log(new Date().getTime() - start);
// console.log(start);
// console.log(end);
// console.log(new Date().getTime());

//  program that shows the delay in execution

// function greet() {
//   console.log("Hello world");
// }

// function sayName(name, callbackgreet) {
//   setTimeout(() => {
//     console.log("Hello" + " " + name);
//   }, 2000);
//   callbackgreet();
// }

// // calling the function
// // setTimeout(greet, 2000);
// // sayName("John");

// // setTimeout(sayName, 2000);
// // greet();

// sayName("John", greet);

// Callback Function Example
function greet(name, myFunction) {
  console.log("Hello world");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log("Hello" + " " + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, "John", sayName);
