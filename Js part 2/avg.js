var avg = 0;

function myAvg(a, b) {
  avg = (a + b) / 2;
  console.log(avg);
  return avg;
}

myAvg(2, 2); //2
console.log(avg); //2

var sum = myAvg(2, 2); //2
sum += sum; // sum = sum + sum = 2 + 2
console.log(sum); // 4

// *******************************************

function mul(a, b) {
  multiply = a * b;
  console.log(multiply);
}

mul(2, 2);

console.log("let's do the multiplication " + multiply * 10);
