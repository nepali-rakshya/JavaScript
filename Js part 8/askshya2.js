//

//*************************** CALLBACK FUNCTIONS

//
//
//  function inputName(
//   roll = (
//     stdName,
//     sub = (
//       name,
//       answer = (sbjName) => {
//         console.log(`I majored in ${sbjName}`);
//       }
//     ) => {
//       let subj = prompt(`What did you major in, ${name} :`);
//       answer(subj);
//     }
//   ) => {
//     let rollNo = prompt("What is your roll no :");
//     console.log("And roll number is : " + rollNo);
//     sub(stdName);
//   }
// ) {
//   let name = prompt("What is your name :");
//   console.log(`My name is ${name}`);
//   roll(name);
// }

// inputName();

// ************************* NORMAL FUNCTIONS

// (function answer() {
//   let name = prompt("Name: ");
//   console.log("my name is " + name);
//   let roll = prompt("Roll no. : ");
//   console.log("my roll no is " + name);
//   let subj = prompt("Subject : ");
//   console.log("my subject is " + subj);
// })();

//
// ************************* PROMISES

//

let promise = new Promise((res, rej) => {
  let name = prompt("What is your name :");
  console.log(`My name is ${name}`);
  res(name);
});

promise
  .then((stdName) => {
    let rollNo = prompt(`${stdName}, what is your roll no :`);
    console.log("My roll number is : " + rollNo);
    return stdName;
  })
  .then((stdName) => {
    let subj = prompt(`What did you major in, ${stdName.slice(0, 7)} :`);
    console.log(`I majored in ${subj}`);
  });
