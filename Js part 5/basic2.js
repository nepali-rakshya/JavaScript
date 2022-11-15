// let a = prompt("Please write down a number?");
// console.log(parseInt(a));

const luck = parseInt(prompt("Choose your luck"));

switch (luck) {
  case 1:
    console.log("Try again.");

  case 2:
    console.log("Try again..");
    break;
  case 3:
    console.log("Try again...");
    break;
  case "rakshya":
    console.log("You Won!!!");
    break;
  default:
    console.log("You have no luck today");
}

// let names = "rakshya";

// console.log(names === "rakshya" ? "yesss" : "nooo");

// let num = 6;

// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("yesss");
// } else {
//   console.log("noooooo");
// }
