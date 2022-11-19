// console.log("Let's get started");
// console.assert(55 < 5);
// console.info("Here we go again");
// console.error("Here's an error");
// console.warn("Let's stop it");
// const obj = {
//   name: "Rakesh",
//   roll: 6,
//   subject: "Science",
// };
// console.table(obj);
// console.time("for loop");
// let result = " ";
// for (let i = 0; i < 5; i++) {
//   result += i + " ";
// }
// console.log(result);

// console.timeEnd("for loop");

// alert("Please type your roll number");
// let number = parseInt(prompt("Your number is", "123"));
// alert("Your entered a " + typeof number);

// let write = confirm("Do you want to write it?");
// write === true ? console.log("Let's write") : console.log("I don't want to");

let age;
let question = () => {
  age = parseInt(prompt("Enter your age"));
  age >= 18 // if
    ? alert("You can drive")
    : // window.location.assign("https://www.google.com/"))
    age < 18 && age >= 4 // else if
    ? alert("You cannot drive")
    : // window.location.assign("https://www.google.com/"))
    age < 0 // else if
    ? console.error("Invalid")
    : console.log("Enter a valid number");
};

let result;

do {
  question();
  result = confirm("Do you want to rewrite?") ? true : false;
  if (result === false) {
    break;
  }
} while (result === true);

let color = prompt("Enter your preferred color");
document.querySelector("body").style.background = color;
