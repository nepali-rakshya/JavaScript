// let promise1 = new Promise((resolve, reject) => {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//       resolve("done");
//     }, 5000);
//   }
// });

// let promise2 = new Promise((resolve, reject) => {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   resolve("done2");
// });

// console.log(promise1);

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// setTimeout(() => {
//   console.log("hola");
//   console.log("I am done");
// }, 1000);
// setTimeout(() => {
//   console.log("bye");
//   console.log("I am not done");
// }, 1000);

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("hey promise 1");
//     resolve("done");
//   }, 1000);
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("hey promise 2");
//     reject(new Error("Its not valid"));
//   }, 1000);
// });

// promise2.catch((value) => {
//   console.log(value);
// });

// console.log(promise1, promise2);

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(true);
//   }, 0);
//   // reject(new Error("It's invalid"));
// });

// p.then(
//   (result) => {
//     console.log("It's success");
//   },
//   (error) => {
//     console.log(error + " try again");
//   },
//   (result) => {
//     console.log(result);
//   }
// );
