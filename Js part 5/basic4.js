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

// console.log("This is pop");
// let num1 = [1, 2, 3, 4, 11, 6];
// console.log(num1);
// console.log(num1.pop());
// console.log(num1);

// console.log("This is push");
// console.log(num1.push(10));
// console.log(num1);

// console.log("This is shift");
// console.log(num1.shift());
// console.log(num1);

// console.log("This is unshift");
// console.log(num1.unshift(4));
// console.log(num1);

// console.log("This is delete");
// delete num1[2];
// console.log(num1);

// console.log("This is concat");
// let a1 = [1, 2, 3, 4, 5, 6, "here"];
// let b1 = ["okay", 7, 5, 3, 4];
// let c1 = [];

// let joined = c1.concat(a1, b1);
// let joinedArray = a1.concat(b1);
// console.log(joined);
// console.log(joinedArray);

// console.log("This is sort");
// let arra = [3333, 4353, 34, 23, 6, 4, 345, 56745, 778, 5654, 5];
// let arra1 = ["apple", "arange", "ball", "bello", "arrow"];
// console.log(arra1.reverse());
// // console.log(arra.sort());
// console.log(
//   arra.sort(function (a, b) {
//     return a - b;
//   })
// );

// https://www.youtube.com/watch?v=kxUNQtheCxM

let sortArray = [22, 56, 75, 34, 77, 2, 4, 53, 56, 45];
const compare = (a, b) => {
  return b - a;
};

console.log(sortArray.sort(compare));

let sorts = [
  { x: 2, y: 10 },
  { x: 5, y: 6 },
];

console.log(
  sorts.sort((a, b) => {
    return a.y - b.y;
  })
);

console.log("This is slice and splice");
console.log("");

let num = [3, 4, 5, 6, 7, 8, 2, 3, 20, 2, 1, 11];
console.log(num.splice(3, 2, 11, 11, 11));

console.log(num, num.length);

console.log(num.slice(3, 8));
console.log(num);
