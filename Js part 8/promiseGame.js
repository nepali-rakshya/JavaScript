// let userInput = () => {
//   let user = prompt("Rock, Paper, Scissor:");
//   let userInitial = user.charAt(0).toUpperCase();
//   return userInitial;
// };

// let botInput = () => {
//   let valueArr = ["Rock", "Paper", "Scissor"];
//   let botVal = valueArr[Math.floor(Math.random() * valueArr.length)];
//   let botInitial = botVal.charAt(0);
//   return botInitial;
// };

// let check = (callbackUser, callbackBot) => {
//   let user = callbackUser();
//   console.log(user);
//   let bot = callbackBot();
//   console.log(bot);

//   if (
//     (user === "R" && bot === "R") ||
//     (user === "P" && bot === "P") ||
//     (user === "S" && bot === "S")
//   ) {
//     console.log("It's a tie");
//   } else if (
//     (user === "R" && bot === "P") ||
//     (user === "P" && bot === "S") ||
//     (user === "S" && bot === "R")
//   ) {
//     console.log("The bot wins");
//   } else if (
//     (user === "R" && bot === "S") ||
//     (user === "P" && bot === "R") ||
//     (user === "S" && bot === "P")
//   ) {
//     console.log("The user wins");
//   }
// };

// check(userInput, botInput);

//
//
// ***********************************************************
//
//
//  P R O M I S E S

let promise1 = new Promise((resolve, reject) => {
  let value = prompt("Rock, Paper, Scissor:");
  let userInitial = value.charAt(0).toUpperCase();
  // resolve(userInitial);
  reject(userInitial);
});

promise1.then(
  (userVal) => {
    let valueArr = ["Rock", "Paper", "Scissor"];
    let botVal = valueArr[Math.floor(Math.random() * valueArr.length)];
    let botInitial = botVal.charAt(0);
    let user = userVal;
    console.log("User: " + user);
    let bot = botInitial;
    console.log("Bot: " + bot);
    setTimeout(() => {
      if (
        (user === "R" && bot === "R") ||
        (user === "P" && bot === "P") ||
        (user === "S" && bot === "S")
      ) {
        console.log("It's a tie");
      } else if (
        (user === "R" && bot === "P") ||
        (user === "P" && bot === "S") ||
        (user === "S" && bot === "R")
      ) {
        console.log("The bot wins");
      } else if (
        (user === "R" && bot === "S") ||
        (user === "P" && bot === "R") ||
        (user === "S" && bot === "P")
      ) {
        console.log("The user wins");
      }
    }, 3000);
  },
  (res) => {
    console.log(new Error(`This is invalid "${res}"`));
  }
);
// .catch((res) => {
//   console.log(new Error("This is invalid " + res));
// });
