let backG = document.body;

let firstTime = setTimeout(() => {
  console.log(backG.classList.toggle("pink"));
}, 1000);

let secondTime = setTimeout(() => {
  backG.style.background = "red";
}, 2000);

// let count = 1;
// let thirdSame = setInterval(function () {
//   alert("count " + count);
//   backG.style.background = "skyblue";
//   count++;
// }, 5000);
