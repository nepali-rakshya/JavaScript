//setTimeout(() => {
//   console.log("I am outside");
//   setTimeout(() => {
//     console.log("I am inside");
//     setTimeout(() => {
//       console.log("I am super inside");
//     }, 3000);
//   }, 2000);
// }, 1000);

//******************************************************

let promises1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("I am 1 sec");
    resolve("done1");
  }, 5000);
});
let promises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("I am 2 sec");
    resolve("done2");
  }, 2000);
});
let promises3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("I am 3 sec");
    resolve("done3");
  }, 3000);
});

let all_promises = Promise.all([promises1, promises2, promises3]);

all_promises.then((value) => {
  console.log(value);
});
