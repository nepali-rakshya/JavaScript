for (let row of mytab1.rows) {
  for (let cell of row.cells) {
    let val = (cell.innerText = "help"); // your code below
  }
}

let array = ["rakshya", "is", "a", "good", "girl"];

let string = "Iamagoodgirl";
console.log(Array.from(string));

console.log(Array.isArray([...string]));
console.log([...string]);

// console.log(isNaN(5));
console.log(Array.isArray(string));

// let space = "";
// for (let i = array.length; i > 0; i--) {
//   space += i + " ";
//   console.log(space);
// }
// console.log(space);

// for (key in array) {
//   console.log(typeof key);
// }

// for (let key of array) {
//   console.log(key);
// }

// let obj = {
//   name: "rakshya",
//   roll: 5,
// };

// for (key in obj) {
//   console.log(obj[key]);
// }
