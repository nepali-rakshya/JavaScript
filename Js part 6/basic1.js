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

  return age >= 18
    ? alert("You can drive")
    : age < 18 && age > 0
    ? alert("You cannot drive")
    : age < 0
    ? console.error("Invalid")
    : console.log("Donot use minus");
};

question();
console.log(
  confirm("Do you want to rewrite?") ? question() : alert("No thanks")
);
