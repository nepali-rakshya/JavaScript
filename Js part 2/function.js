function myNames(name1, name2) {
  var firstPerson = name1;
  var secondPerson = name2;

  console.log("The people are " + firstPerson + " and " + secondPerson);
  return firstPerson;
}

var names = myNames("Ram", "Shayam");

if (names !== "Ram") {
  console.log("Yes! they arenot strings");
} else {
  console.log("Yes! they are strings");
}
