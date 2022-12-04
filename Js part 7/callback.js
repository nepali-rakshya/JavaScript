// // function loadScript(script, callback) {
// //   let newS = document.createElement("script");
// //   newS.setAttribute("src", script);
// //   document.body.append(newS);
// //   newS.onload = () => {
// //     return callback();
// //   };
// // }

// // function hello() {
// //   alert("Hello my fellas");
// // }

// // loadScript("https://www.google.com/", hello);

// // function myDisplayer(name) {
// //   alert("My name is " + name);
// // }

// // function myCalculator(num1, num2, myCallback) {
// //   let n = prompt("What is your name");
// //   //   console.log(n);
// //   return myCallback(n);
// // }

// // let value = myCalculator(5, 5, myDisplayer);

// // https://cdn.jsdeliver.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js

// // function loadScript(src, details) {
// //   let newS = document.createElement("script");
// //   newS.setAttribute("src", src);
// //   document.body.append(newS);
// //   newS.onload = () => {
// //     console.log("The script is " + src);
// //     details(null, src);
// //   };
// //   newS.onerror = () => {
// //     console.log("The src isn't valid " + src);
// //     details(new Error("Please correct the src"));
// //   };
// // }

// // function details(error, src) {
// //   if (error) {
// //     console.log("We aren't ready");
// //     return;
// //   }
// //   alert("The source file is " + src);
// // }

// // loadScript(
// //   "https://cdn.js deliver.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
// //   details
// // );

// // function inputNames() {
// //   let names = prompt("Name please");
// //   if (!isNaN(names)) {
// //     console.log("Please insert names");
// //   } else {
// //     let newTD = document.createElement("td");
// //     document.getElementById("valueStoring").append(newTD);
// //     newTD.innerText = names;
// //   }
// // }

// // function checkNames(inputNames) {
// //   if (isNaN(inputNames())) {
// //     console.log("Please insert names");
// //   } else {
// //     let newTD = document.createElement("td");
// //     let value = (newTD.innerHTML = inputNames());
// //     document.getElementById("valueStoring").append(value);
// //     return inputNames();
// //   }
// // }

// // setInterval(inputNames, 2000);

// console.error("error");
// let hello = prompt("what the freak");

// if (hello === "true") {
//   console.log("very goooood");
// } else {
//   let ohio = new Error("what the freak");
//   console.log(ohio);
// }
