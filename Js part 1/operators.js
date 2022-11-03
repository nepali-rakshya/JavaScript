document.write("Hello anyone there?");

var yes = true;
var no = false;

if (yes) {
  document.write("yes what's your problem");
} else {
  document.write("no sorry we are closed");
}

document.write("excuse me i had a question ");
document.write("am i older than 55? ");

var herAge = 55;

if (herAge > 60) {
  document.write("NO you are young ");
} else if (herAge < 54) {
  document.write("No you are old");
} else {
  document.write("NO dear you are still young ");
}

document.write("actually i wanted to compare it with my age please ");

var herAgeTotal = "55";

if (herAgeTotal === 55) {
  document.write("no man this is incorrect! ");
} else if (herAgeTotal === "55") {
  document.write("yes mam this is correct");
} else {
  document.write("i need to get my glasses on ");
}

if (herAgeTotal !== 55) {
  document.write("yayyy good to go ahead ");
}
