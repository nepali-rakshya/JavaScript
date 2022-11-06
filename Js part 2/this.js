var myCar = {
  maxSpeed: 55,
  driver: "rakshya",
  walk: function () {
    console.log("I like walking.");
  },
  drive: function (speed, time) {
    console.log(speed * time);
  },
  run: function () {
    console.log(this.driver + " likes running.");
  },
  details: function () {
    console.log(this);
  },
};

console.log(myCar.details());
console.log(myCar.run());
// console.log(myCar.maxSpeed, myCar.walk(), myCar.drive(50, 3));
// console.log(myCar.drive(50, 3));

var myBarbie = {
  names: "Barbie",
  eyes: "beautiful",
  color: "fair",
  hair: "silky",
  dance: function () {
    console.log("Her dance is " + this.eyes);
  },
  laugh: function () {
    console.log("Her name is " + this.names);
  },
  details: function () {
    console.log(this);
  },
};

console.log(myBarbie.details());
console.log(myBarbie.dance());
