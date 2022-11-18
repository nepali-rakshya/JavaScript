// console.log(array);
// array.push(7);
// console.log(array);

// array.forEach((element) => {
//   console.log(element + user);
// });

// array.map((element) => {
//   console.log(element + user);
// });

// for (element in array) {
//   console.log(array[element] + user);
// }

// for (let element of array) {
//   console.log(element + user);
// }

let user;
let arrayNew = [1, 2, 3, 4, 5];

// do {
//   user = parseInt(prompt("Enter a number"));
//   arrayNew.push(user);
//   console.log(arrayNew);
// } while (user !== 0);
// console.log(arrayNew);

while (user !== 0) {
  user = parseInt(prompt("Enter a number"));
  arrayNew.push(user);
}
console.log(arrayNew);
