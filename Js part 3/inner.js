var newL = document.createElement("li");
var newA = document.createElement("a");
var oldL = document.querySelectorAll("ul");

oldL[0].append(newL);

newL.append(newA);
newA.innerText = "Item 4";

newA.setAttribute("href", "#");

// oldL[0].insertBefore(newL, oldL[0].querySelector("li"));

oldL[0].insertBefore(newL, oldL[0].getElementsByTagName("li")[0]);
