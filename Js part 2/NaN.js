var names = "Rakshya";
var num = 10;

if (isNaN(names)) {
  console.log("Okay this seems correct!");
}

var names1 = 'Rakshya\'s note book, "Hamster"';
console.log(names1.length); //properties of string object built-in
console.log(names1.toUpperCase()); //methods of string object built-in
console.log(names1.lastIndexOf("a"));

if (isNaN(names1)) {
  console.log("Type a number you idiot!");
}

if (names1.indexOf("doll") === -1) {
  console.log('Rakshya\'s note book, "Hamster"' + names1.concat(" doll"));
}

var string1 = "apple";
var string2 = "banana";

console.log(string1.toUpperCase());
