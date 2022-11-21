console.log(typeof document.body.parentNode.parentNode);

console.log(document.body.firstElementChild);
console.log(document.body.hasChildNodes());
console.log(document.body.child);

let arrayConversion = Array.from(document.body.childNodes);
console.log(arrayConversion);

let node = document.body.childNodes;
console.log(node);

console.log(document.getElementsByTagName("body"));
console.log(document.head.nextElementSibling);
console.log(document.body.previousElementSibling);
