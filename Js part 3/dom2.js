// *********** STYLING ELEMENTS *************

// var title = document.querySelector("#main-heading");
// title.style.backgroundColor = "red";
// console.log(title);

// *********** CREATING ELEMENTS *************

var newHead = document.createElement("h1");
var oldHead = document.querySelector("h1");

oldHead.append(newHead);

newHead.innerText = "And Stars";

newHead.style.fontSize = "3rem";

// ************** MODIFYING ATT. AND CLASSES **************

newHead.setAttribute("class", "main-heading");

var list = document.querySelector("li");
console.log(list.getAttribute("class"));
