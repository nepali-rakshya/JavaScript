// P A R E N T    N O D E    T R A V E R S A L

// const parents = document.querySelector("ul");
// console.log(parents.parentNode.parentNode.parentNode.parentNode);
// console.log(parents.parentElement.parentElement.parentElement.parentElement);

// C H I L D    N O D E    T R A V E R S A L

let childTrav = document.querySelector("ul").querySelectorAll("li")[2];
let newLi = document.createElement("li");
newLi.innerText = "X-Men";
let newLine = childTrav.append(newLi);

newLi.classList.add("main-heading");

let childE = document.querySelector("ul");
console.log(childE.childNodes);
console.log(childE.children);
console.log(childE.children);

console.log(childE.firstElementChild);
