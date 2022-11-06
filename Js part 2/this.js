var myCar = {
  maxSpeed: 55,
  driver: "rakshya",
  walk: function () {
    console.log("I like walking.");
  },
  drive: function (speed, time) {
    console.log(speed * time);
  },
};

console.log(myCar.maxSpeed, myCar.walk(), myCar.drive(50, 3));
// console.log(myCar.drive(50, 3));
