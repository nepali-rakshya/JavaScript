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

// let thirdRow = document.querySelector("table");

// let lastRow = thirdRow.lastElementChild.lastElementChild.cells;
// let value = Array.from(lastRow);
// console.log(value);

// console.log(Array.isArray(lastRow));

// console.log([...lastRow]);

// console.log(Array.isArray(...lastRow));

// [...lastRow].forEach((element) => {
//   element.innerText = "help";
// });

// for (let row of lastRow) {
// for (cell in lastRow.cells) {
//   let val = (cell.innerText = "help"); // your code below
//   console.log(val);
// }
// }

document.querySelector(".heading").style.color = "red";

let heading = document.querySelector("table").rows[0];

for (let element of heading.cells) {
  console.log((element.style.color = "blue"));
}

let content = document.querySelector("table").lastElementChild;
// console.log(content);

for (let row of content.rows) {
  for (let col of row.cells) {
    console.log((col.style.color = "green"));
  }
}

for (let row of content.rows) {
  for (let col of row.cells) {
    if (isNaN(col.innerText) === false) {
      console.log((col.style.color = "white"));
    }
  }
}

let foot = (document.querySelector(".below").style.color = "purple");
