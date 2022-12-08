// let promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("It has been resolved");
//     res("rakshya");
//   }, 1000);
//   //   rej(new Error("There's an issue"));
// });

// promise1
//   .then((name) => {
//     console.log(name);
//     return new Promise((resolve, reject) => {
//       resolve("There is no escape");
//     });
//   })
//   .then((escape) => {
//     console.log(escape);
//     return new Promise((resolve, reject) => {
//       reject(new Error("Here is a problem"));
//     });
//   })
//   .catch(function p(problem) {
//     console.log(problem);
//   });

/********************************************************/

//// CAT   MEME   CODE

// let first = false;
// let second = false;

// function display() {
//   if (first) {
//     return "I am first";
//   } else if (second) {
//     return "I am second";
//   } else {
//     return "I failed";
//   }
// }

// console.log("Rakshya " + display());

// function name(
//   display = (name) => {
//     console.log(name);
//   }
// ) {
//   let n = prompt("Name: ");
//   display(n);
// }

// name();

// let promise = new Promise((resolve, reject) => {
//   let n = prompt("Name:");
//   resolve(n);
// });

// promise.then((name) => {
//   console.log(name);
// });

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    alert("Hello I am resolved");
    // resolve("Done");
  }, 2000);
  reject("Sorry");
});

promise1
  .then(
    (resolve) => {
      console.log(resolve + " yes!");
    },
    (reject) => {
      console.log(reject + " no");
      // return reject;
      return new Promise((resolve, reject) => {
        if (true) {
          console.log("We are done");
          resolve("yes!");
        }
      });
    }
  )
  .then((value) => {
    console.log("Please try again " + value);
  });
