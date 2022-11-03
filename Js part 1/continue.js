for (var i = 1; i < 10; i++) {
  console.log("hello babe welcome" + i);

  if (i === 5) {
    console.log("i ain't let that happening :P");
    continue;
  }

  if (i == 7) {
    console.log("i am gonna break this loop");
    break;
  }
}

console.log("did we made it?");
