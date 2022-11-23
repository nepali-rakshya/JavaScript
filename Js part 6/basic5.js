// ***************************************************
// P R A C T I C E    Q U E S T I O N

let navBar = document.querySelector("ul").firstElementChild.firstElementChild;
console.log((navBar.style.color = "red"));

console.log(navBar);

Array.from(document.querySelectorAll("li")).forEach((element) => {
  element.style.background = "cyan";
});
