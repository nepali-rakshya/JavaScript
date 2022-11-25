let backG = document.body;

// let firstTime = setTimeout(() => {
//   console.log(backG.classList.toggle("pink"));
// }, 1000);

// let secondTime = setTimeout(() => {
//   backG.style.background = "red";
// }, 2000);

console.time("first");
let element = ["black", "pink", "grey", "skyblue", "red", "blue", "green"];

let count = 0;

let thirdSame;

for (let i = 0; i <= element.length; i++) {
  thirdSame = setInterval(function () {
    alert("Color " + element[i]);
    backG.style.background = element[i];
  }, 100);
}

clearInterval(thirdSame);

console.timeEnd("first");
// let a = "you are ";
// let func = (b) => {
//   console.log(a + b);
// };

// func("hola");
