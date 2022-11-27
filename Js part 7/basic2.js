let b = document.getElementsByTagName("button")[0];
// b.onclick = () => {
//   alert("Hola my fellas");
// };
// b.onclick = () => {
//   alert("We are good");
// };

let x = () => {
  console.log("Hey gorgeous");
};

b.addEventListener("click", x);

// let a = prompt("Tell me a joke");

// if (a === "yes") {
//   b.removeEventListener("click", x);
// }
let mouse = (e) => {
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
  console.log("Mickey Mouse");
};

b.addEventListener("mouseover", mouse);
