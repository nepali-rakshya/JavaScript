// function display(sum) {
//   console.log("The sum is " + sum);
// }

// function sum(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return sum;
// }

// let value = sum(1, 2);
// display(value);

// function sum(a, b, callbackDisplay) {
//   let sum = a + b;
//   callbackDisplay(sum);
// }

// sum(1, 2, function display(sum) {
//   console.log("The sum is " + sum);
// });

// const myCalc = (
//   a,
//   b,
//   display = function (sum) {
//     console.log("The sum is " + sum);
//   }
// ) => {
//   let sum = a + b;
//   display(sum);
// };

// myCalc(1, 2);

// function display() {
//   console.log("hehe");
//   return "poo";
// }

// const display1 = () => display();

// const display2 = function () {
//   return display1();
// };

// console.log(display2());

// let rakPlay = new Promise((resolve, reject) => {
//   let name = prompt("What's your name?");
//   resolve((() => name)());
// });

// rakPlay // its a parameter not function
//   .then((result) => {
//     setTimeout(() => console.log(result), 1000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("I"), 2000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("like"), 3000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("you"), 4000);
//   });

// callback is the function taking another function as an argument

// function nameInput(callback) {
//   let name = prompt("What is your name?");
//   callback(name);
// }

// nameInput((names) => {
//   console.log("My name is " + names);
// });

// let nameInput = (
//   display = (name) => {
//     console.log("My name is " + name);
//   }
// ) => {
//   let value = prompt("What is your name?");
//   display(value);
// };

// nameInput();

let fruits = ["orange", "apple", "banana", "cherry"];

const arrayList = (
  display = function (
    name,
    add = (
      addValues,
      rak = (
        name,
        rak1 = (
          name,
          rak2 = (
            name,
            rak3 = (
              name,
              rak4 = (
                name,
                rak5 = (
                  name,
                  rak6 = (
                    name,
                    rak7 = (name) => {
                      console.log("I like you rakshya and " + name);
                    }
                  ) => {
                    console.log("I like you rakshya and " + name);
                    rak7(name);
                  }
                ) => {
                  console.log("I like you rakshya and " + name);
                  rak6(name);
                }
              ) => {
                console.log("I like you rakshya and " + name);
                rak5(name);
              }
            ) => {
              console.log("I like you rakshya and " + name);
              rak4(name);
            }
          ) => {
            console.log("I like you rakshya and " + name);
            rak3(name);
          }
        ) => {
          console.log("I like you rakshya and " + name);
          rak2(name);
        }
      ) => {
        console.log("I like you rakshya and " + name);
        rak1(name);
      }
    ) => {
      console.log("I like " + addValues);
      rak(name);
    }
  ) {
    console.log(name);
    add(name);
  }
) => {
  let value = fruits.map((element) => {
    return element;
  });
  display(value);
};

arrayList();

// let distance = () => "hello";

// console.log(distance());
