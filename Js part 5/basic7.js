// let x = Math.floor(Math.random() * 11) + 1;
// console.log(x);

// console.log("***********************************");

// let a = Math.floor(Math.random() * 100) + 1;
// console.log(a);

// console.log("*********************************");

// let b = Math.floor(Math.random() * (10 - 6)) + 6;
// console.log(b);

for (let i = 100; i >= 0; i--) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessNumber = parseInt(prompt("Guess the number from 1 to 100"));

  if (guessNumber < randomNumber) {
    console.log("Your guess " + guessNumber + " random no is " + randomNumber);
  } else if (guessNumber > randomNumber) {
    console.log("Your guess " + guessNumber + " random no is " + randomNumber);
  } else {
    console.log("Correct");
    break;
  }

  console.log("No of chances " + i);
}

console.log("Better luck next time!!!!!!");
