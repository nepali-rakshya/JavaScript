// console.log(typeof document.body.parentNode.parentNode);

// console.log(document.body.firstElementChild);
// console.log(document.body.hasChildNodes());
// console.log(document.body.child);

// let arrayConversion = Array.from(document.body.childNodes);
// console.log(arrayConversion);

// let node = document.body.childNodes;
// console.log(node);

// console.log(document.getElementsByTagName("body"));
// console.log(document.head.nextElementSibling);
// console.log(document.body.previousElementSibling);

// ***************************************************
// =====================TABLE=========================

// console.log(typeof document);
// // console.log(document.body.firstElementChild);
// let check =
//   document.body.firstElementChild.nextElementSibling.rows[3].innerHTML;
// console.log(check);

// let table =
//   document.body.lastElementChild.previousElementSibling.rows[0].cells[0]
//     .innerHTML;
// console.log(table);

// let tableCheck =
//   document.body.firstElementChild.nextElementSibling.rows[0].children[3]
//     .cellIndex;

// let tableCheck =
//   document.body.firstElementChild.nextElementSibling.rows[0].rowIndex;

// console.log(tableCheck);

let thirdRow = document.querySelector("table");

let lastRow = thirdRow.lastElementChild.lastElementChild;

console.log(lastRow);

// for (let row of lastRow) {
for (cell in lastRow.cells) {
  let val = (cell.innerText = "help"); // your code below
  console.log(val);
}
// }
