// // getName();
// // console.log(getName);

// var x = 9;
// // console.log(x);
// // function getName() {
// //   console.log("Hello");
// // }

// console.log("hello");
// const a = 9;

// let a = 10;
// console.log(a);
// // console.log(x);

// function animal() {
//   if (true) {
//     var animal1 = "cat";
//     const animal2 = "dog";
//     let animal3 = "rat";
//   }
//   console.log(animal1);
//   console, log(animal2); //animal2 is not defiend
//   console, log(animal3); //animal3 is not defiend
// }
// animal();

function value(callbackValue) {
  console.log("I am a value");
  callbackValue();
}

value2 = () => {
  console.log("You are a value");
};

value(value2);
