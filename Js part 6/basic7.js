// appendChild append prepend before after replaceWith

// let value = document.createElement("p");
// value.innerHTML = "<strong>I AM ATOMIC </strong>";
// let newLine = document.body.firstElementChild.nextElementSibling;
// // console.log(newLine.appendChild(value));
// // console.log(newLine.append("HOLA"));
// // console.log(newLine.appendChild(value));
// // console.log(newLine.replaceWith(value));
// newLine.remove();

let newLine = document.body.firstElementChild.nextElementSibling.children;
// console.log(newLine[1].classList.add("blue", "red", "purple"));

// console.log((newLine[2].className = "red"));

console.log(newLine[2].classList.toggle("red"));
