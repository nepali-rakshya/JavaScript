// let boy1 = "Ram";
// let boy2 = "Hari";
// let book = `Ramayan's book is awesome`;
// let names = `Rakshya`;
// let name2 = `             Hola             `;

// let sentence = `${boy1} is a friend of ${boy2}`;

// console.log(sentence);
// console.log(book);

// console.log(sentence.length);
// console.log(sentence.slice(4, 15));
// console.log(sentence.toUpperCase());
// console.log(book.replace("Ramayan's", "Rakshya's"));
// console.log(sentence.concat(". And he is friend with " + names));
// console.log(name2.trim());

// const word = `Hello everyone where are everyone? "Rakshya"`;
// const letter = `?`;

// const find = `The letter ${letter} is at "${word.indexOf(
//   word.includes(letter) ? letter : "other place"
// )}"`;

// console.log(find);

// let a = [1, 2, 3, 4, 8];
// let aString = a.toString();

// console.log(aString);
// console.log(a.join("_"));

// console.log(a.length);
// console.log(a.pop());
// console.log(a);
// console.log(a.push(7));
// console.log(a);

console.log("This is pop");
let num1 = [1, 2, 3, 4, 11, 6];
console.log(num1);
console.log(num1.pop());
console.log(num1);

console.log("This is push");
console.log(num1.push(10));
console.log(num1);

console.log("This is shift");
console.log(num1.shift());
console.log(num1);

console.log("This is unshift");
console.log(num1.unshift(4));
console.log(num1);

console.log("This is delete");
delete num1[2];
console.log(num1);

console.log("This is concat");
let a1 = [1, 2, 3, 4, 5, 6, "here"];
let b1 = ["okay", 7, 5, 3, 4];
let c1 = [];

let joined = c1.concat(a1, b1);
let joinedArray = a1.concat(b1);
console.log(joined);
console.log(joinedArray);
