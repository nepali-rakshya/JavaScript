let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("It has been resolved");
    res("rakshya");
  }, 1000);
  //   rej(new Error("There's an issue"));
});

promise1
  .then((name) => {
    console.log(name);
    return new Promise((resolve, reject) => {
      resolve("There is no escape");
    });
  })
  .then((escape) => {
    console.log(escape);
    return new Promise((resolve, reject) => {
      reject(new Error("Here is a problem"));
    });
  })
  .catch((problem) => {
    console.log(problem);
  });
