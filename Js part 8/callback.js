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

const myCalc = (
  a,
  b,
  display = function (sum) {
    console.log("The sum is " + sum);
  }
) => {
  let sum = a + b;
  display(sum);
};

myCalc(1, 2);
