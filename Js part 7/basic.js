let backG = document.body;

// let firstTime = setTimeout(() => {
//   console.log(backG.classList.toggle("pink"));
// }, 1000);

// let secondTime = setTimeout(() => {
//   backG.style.background = "red";
// }, 2000);

let element = ["black", "pink", "grey", "skyblue", "red", "blue", "green"];
let count = 0;
// let value = setInterval(() => {
//   // alert(`Color ${element[count]}`);
//   console.log(count);
//   backG.style.background = element[count];
//   if (count === element.length - 1) {
//     clearInterval(value);
//   }
//   count++;
// }, 1000);

function backround() {
  console.log(count);
  backG.style.background = element[1];
  count++;
}

// setInterval(backround(), 1000);

// let num = 0;

// var intervalId = setInterval(function () {
//   var timoutId = setTimeout(function () {
//     console.log(`wait for me! ${num}`);
//   }, 1000);
//   num++;
// }, 1000);

// setTimeout(() => {
//   console.log("this is the first message");
// }, 3000);
// setTimeout(() => {
//   console.log("this is the second message");
// }, 2000);
// setTimeout(() => {
//   console.log("this is the third message");
// }, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message

// function foo() {
//   console.log("The parentheses");
// }

// foo();
