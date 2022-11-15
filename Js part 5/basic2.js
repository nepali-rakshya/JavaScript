let a = prompt("Hi, what's your name?");
console.log(parseInt(a));
console.log(a.toString());

const luck = prompt("Choose your luck");
switch (luck) {
  case "1":
    console.log("Try again.");
    break;
  case "2":
    console.log("Try again..");
    break;
  case "3":
    console.log("Try again...");
    break;
  case "rakshya":
    console.log("You Won!!!");
    break;
  default:
    console.log("You have no luck today");
}
