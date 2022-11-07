var myDate = new Date(2000, 10, 29, 9, 15, 00);
console.log(myDate);

console.log("year " + myDate.getFullYear());
console.log("month " + myDate.getMonth());
console.log("date " + myDate.getDate());
console.log("hours " + myDate.getHours());
console.log("minutes " + myDate.getMinutes());

console.log("miliseconds " + myDate.getMilliseconds());

console.log("miliseconds " + myDate.getTime());

var myDate1 = new Date(2000, 10, 29, 9, 15, 00);
console.log(myDate1.getTime());

if (myDate.getTime() === myDate1.getTime()) {
  console.log("equal");
} else {
  console.log("not equal");
}

var one = {
  names: "Rakshya",
};

var two = {
  names: "Rakshya",
};

if (one === two) {
  console.log("equal");
} else {
  console.log("not equal");
}

// ***********************************************

var confusion = new Date(1970, 0, 1);
console.log(confusion.getTime());
