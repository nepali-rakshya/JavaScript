var myArray = ["mango", 1, "banana", 2, "orange", 3, "cherry"];

// ============= USING FOR LOOP AND WHILE LOOP ===============

// for (var i = 0; i < myArray.length; i++) {
//   if (isNaN(myArray[i])) {
//     console.log(myArray[i]);
//   } else {
//     myArray[i] = "holla";
//   }
// }

// console.log(myArray.reverse());

// var i = 0;
// while (i < myArray.length) {
//   if (isNaN(myArray[i])) {
//     console.log(myArray[i]);
//   } else {
//     myArray[i] = "holla";
//   }
//   i++;
// }

// ================= CREATING FUNCTION =======================

// function myCat() {
//   console.log("he loves sleeping");
// }

// function heroHere(swords) {
//   return "The here is here with " + swords;
// }

// myCat();
// console.log(heroHere(2));

// ========== CREATING AN INSTANCE OF A MANUAL OBJECT ===========

var myCat2 = new Object();
myCat2.names = function (nameCat) {
  return nameCat;
};
myCat2.eyes = function (no) {
  return no;
};
myCat2.legs = 2;
myCat2.food = function () {
  console.log("He eats a lot of food");
};

myCat2.food();
console.log(myCat2.eyes(2));

var myCat3 = new Object();
myCat3.names = function (nameCat) {
  return nameCat;
};
myCat3.eyes = function (no) {
  return no;
};
myCat3.legs = 2;
myCat3.food = function () {
  console.log("FOOD!!!");
};

myCat3.food();
console.log(myCat3.names("Jacob"));

// ======= SHORT HAND WAY OF CREATING AN INS. OF AN OBJECT =====

var myCat4 = {
  names: function (nameCat) {
    return nameCat;
  },
  eyes: function (no) {
    return no;
  },
  legs: 2,
  food: function () {
    console.log("FOOD!!!");
  },
};

console.log(myCat4.eyes(9));

// ======= USING "this" KEYWORD TO CREATE AN INS. OF AN OBJ. =======

var myCat5 = {
  names: "Snail",
  watch: function () {
    console.log("I love watching " + this.names + " playing");
  },
  details: function () {
    console.log(this);
    console.log(myCat5);
  },
};

myCat5.watch();
myCat5.details();

// ================== CREATING COSTRUCTOR =====================

function Person() {
  this.name = "Ram";
  this.age = 10;
}

var person1 = new Person();
console.log(person1.name);
person1.height = 18;
console.log(person1.height);

var person2 = new Person();
person2.weight = 55;
console.log(person2.weight);
