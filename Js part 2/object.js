var myCar = new Object();
myCar.color = "red";
myCar.wheels = 4;
myCar.miles = function (km, hour) {
  console.log("It run: " + km + "km/" + hour + "hr");
};

console.log(myCar.color, myCar.wheels, myCar.miles(4, 1));

var myCarRocks = {
  color: "black",
  wheels: 4,
  driver: "rakshya",
  runs: function (km, hour) {
    console.log("It runs: " + km + "km/" + hour + "hr");
  },
};

console.log(myCarRocks.driver, myCarRocks.runs(10, 1));
