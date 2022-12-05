function arg() {
  //   let length = ["apple", "orange", "juice"];
  //   for (let len of length) {
  //     console.log(len);
  //   }
  //   for (key in length) {
  //     console.log(length[key]);
  //   }
  //   for (let i = 0; i < length; i++) {
  //     sum = sum + arguments[i];
  //     // console.log(arguments[i]);
  //   }
  //   console.log(sum);

  let length = Array.from(arguments);
  //   let values = length.map((value) => {
  //     console.log(value);
  //     return "elephant";
  //   });
  //   console.log(values);
  //   let values = length.filter((x) => {
  //     return x > 3;
  //   });
  //   console.log(values);

  let values = length.reduce((x1, x2) => {
    return x1 + x2;
  });
  console.log(values);
}

arg(1, 2, 3, 4, 5, 6);
