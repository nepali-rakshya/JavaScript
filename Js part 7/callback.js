// function loadScript(script, callback) {
//   let newS = document.createElement("script");
//   newS.setAttribute("src", script);
//   document.body.append(newS);
//   newS.onload = () => {
//     return callback();
//   };
// }

// function hello() {
//   alert("Hello my fellas");
// }

// loadScript("https://www.google.com/", hello);

function myDisplayer() {
  //   document.getElementById("container").innerHTML = something;
  let sum = 10;
  return sum;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  return myCallback();
}

let value = myCalculator(5, 5, myDisplayer);
console.log(value);
