// let promise = new Promise(function (resolve, reject) {
//   resolve(78);
// });

// console.log(promise);

var members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
  }, 200);
}

function getAllMembers() {
  setTimeout(function () {
    console.log("Members are:");
    console.log(members);
    setTimeout(() => {
      console.log(members);
    }, 1000);
  }, 100);
}

addNewMember("Alpha");
getAllMembers();

// var members = ["John Doe", "Sam Smith", "Allie Cartel"];

// function addNewMember(newUser, callback) {
//   setTimeout(function () {
//     members.push(newUser);
//     console.log("Member Added");
//     callback();
//   }, 200);
// }

// function getAllMembers() {
//   setTimeout(function () {
//     console.log("Members are:");
//     console.log(members);
//   }, 1000);
// }

// addNewMember("Alpha", getAllMembers);

// setTimeout(function () {
//   //Execute first function
//   console.log("first");

//   setTimeout(function () {
//     //Execute second function
//     console.log("second");

//     setTimeout(function () {
//       //Execute third function
//       console.log("third");
//     }, 2);
//   }, 2);
// }, 2000);
