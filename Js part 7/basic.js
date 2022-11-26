let backG = document.body;

// let firstTime = setTimeout(() => {
//   console.log(backG.classList.toggle("pink"));
// }, 1000);

// let secondTime = setTimeout(() => {
//   backG.style.background = "red";
// }, 2000);

let element = ["black", "pink", "grey", "skyblue", "red", "blue", "green"];
let count = 0;
// let value = setInterval(() => {
//   alert(`Color ${element[count]}`);
//   backG.style.background = element[count];
//   if (count === element.length - 1) {
//     clearInterval(value);
//   }
//   count++;
// }, 1000);

for (let i = 0; i < element.length; i++) {
  setTimeout(() => {
    alert(`Color ${element[i]}`);
    backG.style.background = element[i];
  }, 1000);
}
