// function storage(
//   value = () => {
//     setTimeout(() => {
//       console.log("i am not gonna stop");
//     }, 2000);
//   }
// ) {
//   value();
// }

// storage();

// function welcome(greetingMsg, callback) {
//   console.log("Before calling callback");
//   setTimeout(() => {
//     callback(greetingMsg);
//   }, 0);
//   console.log("After calling callback");
// }
// function sayMyName(greet) {
//   console.log(greet + " Professor");
// }
// welcome("Hello", sayMyName);

function getAPIRequest(callbackOnSuccess) {
  var getReq = new XMLHttpRequest();
  getReq.open("GET", "https://reqres.in/api/users?page=2");
  getReq.send();
  getReq.onload = () => {
    if (getReq.status == 200) {
      callbackOnSuccess(getReq);
    }
  };
}
function processSucessResponse(request) {
  alert("The response is " + request.response);
}
getAPIRequest(processSucessResponse);
