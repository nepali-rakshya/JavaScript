let firstButton = document.body.firstElementChild;

let one = () => {
  let color = (firstButton.style.background = "pink");
  alert(`Now you will get a ${color} color`);
};

firstButton.addEventListener("click", one);

let secondButton = document.body.firstElementChild.nextElementSibling;

secondButton.addEventListener("click", function two() {
  let color = (secondButton.style.color = "red");
  alert(`The color is ${color}`);
});

let thirdButton = document.getElementById("third");

thirdButton.addEventListener("click", function three() {
  let padding = (thirdButton.style.padding = "1.3em");
  alert(`The padding is ${padding}`);
});

let values = ["aadarsha", "rakshya", "sita", "chiranjibi", "sujal"];

// let values = [1111, 1, 11111, 12323, 1144545];

// function compare(a, b) {
//   return a - b;
// }

// console.log(
//   values.sort((a, b) => {
//     return b - a;
//   })
// );

// console.log(values.sort());

// var sortAlphabets = function (text) {
//   return text.split("").sort().join("");
// };

// console.log(sortAlphabets("drpoklj"));
