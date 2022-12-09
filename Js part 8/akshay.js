// // function storage(
// //   value = () => {
// //     setTimeout(() => {
// //       console.log("i am not gonna stop");
// //     }, 2000);
// //   }
// // ) {
// //   value();
// // }

// // storage();

// // function welcome(greetingMsg, callback) {
// //   console.log("Before calling callback");
// //   setTimeout(() => {
// //     callback(greetingMsg);
// //   }, 0);
// //   console.log("After calling callback");
// // }
// // function sayMyName(greet) {
// //   console.log(greet + " Professor");
// // }
// // welcome("Hello", sayMyName);

// // function getAPIRequest(callbackOnSuccess) {
// //   var getReq = new XMLHttpRequest();
// //   getReq.open("GET", "https://reqres.in/api/users?page=2");
// //   getReq.send();
// //   getReq.onload = () => {
// //     if (getReq.status == 200) {
// //       callbackOnSuccess(getReq);
// //     }
// //   };
// // }
// // function processSucessResponse(request) {
// //   alert("The response is " + request.response);
// // }
// // getAPIRequest(processSucessResponse);

// // function getAPIRequest(callbackOnSuccess, callbackOnError) {
// //   var getReq = new XMLHttpRequest();
// //   getReq.open("GET", "https://reqres.in/api/users?page=2");
// //   getReq.send();
// //   getReq.onload = () => {
// //     if (getReq.status == 200) {
// //       callbackOnSuccess(getReq);
// //     } else if (getReq.status == 400) {
// //       callbackOnError();
// //     }
// //   };
// // }
// // function processSucessResponse(request) {
// //   alert("The response is " + request.response);
// // }
// // function processErrorResponse() {
// //   alert("The response has some errors.");
// // }
// // getAPIRequest(processSucessResponse, processErrorResponse);

// function getAPIRequest(callbackOnSuccess, callbackOnError) {
//   var getReq = new XMLHttpRequest();
//   getReq.open("GET", "https://reqres.in/api/users?page=2");
//   getReq.send();
//   getReq.onload = () => {
//     if (getReq.status == 200) {
//       callbackOnSuccess(getReq, processNestedResponse);
//     } else if (getReq.status == 400) {
//       callbackOnError();
//     }
//   };
// }
// function processSucessResponse(request, callbackOnSuccess) {
//   alert("The response is " + request.response);
//   var getReq = new XMLHttpRequest();
//   getReq.open("GET", "https://reqres.in/api/users?page=2");
//   getReq.send();
//   getReq.onload = () => {
//     if (getReq.status == 200) {
//       callbackOnSuccess(getReq);
//     }
//   };
// }
// function processErrorResponse() {
//   alert("The response has some errors.");
// }
// function processNestedResponse(request) {
//   alert("The response is " + request.response);
// }
// getAPIRequest(processSucessResponse, processErrorResponse);

// function sayHello() {
//   console.log("hello");
// }

// setTimeout(sayHello, 1000);

// console.log("Me first");

// function displayData(data) {
//   console.log(data);
// }

// const incomingData = fetch("https://instagram.com/blessingartcreator/posts/1");
// incomingData.then(displayData);
