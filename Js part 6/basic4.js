let para = document.querySelector("#main-para");
console.log(para.matches(".paragraph"));
console.log(para.matches("#main-para"));
console.log(para.closest("div"));
let span = document.querySelector("span");
console.log(para.contains(span));

// console.log(span.matches("span"));
