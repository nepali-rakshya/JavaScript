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

// A T T R I B U T E S

newHead.setAttribute("class", "main-heading");

var list = document.querySelector("li");
console.log(list.getAttribute("class"));

newHead.removeAttribute("class");

// C L A S S E S

var list = document.createElement("li");
var ulList = document.querySelector("ul");

ulList.append(list);
list.innerText = "X-Men";

// list.setAttribute("class", "list-items");
list.classList.add("list-items");

// *************** REMOVE ELEMENTS ***************

// list.remove();

var ul = document.querySelector("ul");

// ul.remove();
