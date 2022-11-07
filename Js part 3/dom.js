var myDiv = document.getElementsByClassName("container");
console.log(myDiv);
console.log(myDiv[0].getElementsByClassName("intro__title"));
var myColumn = document.getElementsByClassName("col");
console.log(myColumn);

console.log(myColumn[0].getElementsByTagName("p"));

var i = 0;
while (i < myColumn.length) {
  console.log(
    "Element with p tag " + i + " =",
    myColumn[i].getElementsByTagName("p")
  );
  i++;
}
