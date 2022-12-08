// //setTimeout(() => {
// //   console.log("I am outside");
// //   setTimeout(() => {
// //     console.log("I am inside");
// //     setTimeout(() => {
// //       console.log("I am super inside");
// //     }, 3000);
// //   }, 2000);
// // }, 1000);

//let value = () => {
//   //arrow function
//   console.log("89");
// };
// value();

// function values() {
//   //function declaration
//   console.log("done");
// }

// let value1 = function () {
//   //function expression
//   console.log("don dona don");
// };
// (() => console.log("fine"))(); //annoynous function

// //******************************************************

// let promises1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am 1 sec");
//     resolve("done1");
//   }, 2000);
// });
// let promises2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am 2 sec");
//     // resolve("done2");
//     reject("done2");
//   }, 1000);
// });
// let promises3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am 3 sec");
//     resolve("done3");
//   }, 3000);
// });

// let all_promises = Promise.any([promises1, promises2, promises3]);

// all_promises.then((value) => {
//   console.log(value);
// });

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// // map every url to the promise of the fetch
// let requests = urls.map((url) => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests).then((responses) =>
//   responses.forEach((response) => alert(`${response.url}: ${response.status}`))
// );

// console.log("Hello to the Promise tutorial");

// function doSomeStuff() {
//   return new Promise(function (resolve, reject) {
//     // console.log("Promise started");
//     // console.log("Promise is doing some important work...");
//     // console.log("Promise has completed, will resolve shortly");
//     // resolve("Promise resolved");
//     setTimeout(() => {
//       reject("Error occurred");
//     }, 2000);
//   });
// }

// doSomeStuff().catch((error) => {
//   console.log(new Error(`Here is an error: ${error}`));
// });

// doSomeStuff().then(
//   function (message) {
//     console.log("Resolve: ", message);
//   },
//   function (error) {
//     console.log("Reject: ", error);
//   }
// );

// let errorPromise = new Promise(function (resolve, reject) {
//   console.log("Promise started");
//   console.log("Promise is doing some important work...");
//   console.log("Promise is now raising an exception.");
//   throw "Exception raised";
//   reject("Error");
//   resolve("Error promise resolved");
// });
// errorPromise
//   .then(
//     function (message) {
//       console.log("Success: ", message);
//     },
//     function (error) {
//       console.log("Failure: ", error);
//     }
//   )
//   .catch(function (error) {
//     console.log("Exception: ", error);
//   });

// function doSomething() {
//   return new Promise(function (resolve, reject) {
//     let count = 0;
//     count += 1;
//     console.log("here");
//     resolve(count);
//   });
// }
// function resolve(count) {
//   return new Promise(function (resolve) {
//     count += 1;
//     console.log("again");
//     resolve(count);
//   });
// }
// doSomething()
//   .then(resolve)
//   .then(resolve)
//   .then(function (count) {
//     console.log("Count: ", count);
//   });
