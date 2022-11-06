/* In this code we can find the issue why the console.log
prints the function first rather than the order it has been 
set into */

var myCar = new Object();
myCar.color = "red";
myCar.wheels = 4;
myCar.miles = function (km, hour) {
  console.log("It run: " + km + "km/" + hour + "hr");
};

console.log(myCar.color, myCar.wheels, myCar.miles(4, 1));

/* The solution is either to print two separate console log function
or use return type in the object function */

var myCarRocks = {
  color: "black",
  wheels: 4,
  seat: 4,
  driver: "rakshya",
  runs: function (km, hour) {
    return "It runs: " + km + "km/" + hour + "hr";
  },
};

console.log(myCarRocks.color, "\n" + myCarRocks.driver);

/* https://stackoverflow.com/questions/68418253/javascript-console-log-method-is-outputting-the-function-before-the-text-given

The reason why console.log prints the function prior to any other
object properties that has been put into the console.log function
while the object function doesn't have a return type.   
*/
