// ***************************************************
// P R A C T I C E    Q U E S T I O N

// let navBar = document.querySelector("ul").firstElementChild.firstElementChild;
// console.log((navBar.style.color = "red"));

// console.log(navBar);

// Array.from(document.querySelectorAll("li")).forEach((element) => {
//   element.style.background = "cyan";
// });

let jokesArray = [
  `A Japanese student: "Master Aykodo, why do Europeans think we look all the same?"
-
The master replied: "I'm not master Aykodo."`,

  `When I see lovers' names carved in a tree, I don't think it's sweet. I just think it's surprising how many people bring a knife on a date.
`,
  `I had a dream where an evil queen forced me to eat a gigantic marshmallow.

When I woke up, my pillow was gone.
`,
  `Can a kangaroo jump higher than a house?
-
Of course, a house doesn’t jump at all.
`,
  `Doctor: You're obese.

Patient: For that I definitely want a second opinion.

Doctor: You’re quite ugly, too.`,
  `A son asks his mother: Mom, the kids are laughing at me, they say my teeth are too long!”
-
Mother replies: “Oh shush, now you’ve scratched the whole floor again!”
`,
  `“Will you marry me?”
-
“No.”
-
2 hours of uncomfortable silence in the hot air balloon.`,
  `“Daddy, what is an alcoholic?”
-
“Do you see those 4 trees, son? An alcoholic would see 8 trees.”
-
“Um, Dad – there are only 2 trees.”`,
  `I should have been more suspicious when the Chinese guy offered to “wok my dog for me”
`,
  `Can I tell you a good time travel joke?
-
[yes]

You didn't like it.`,
];

console.log(jokesArray[[Math.floor(Math.random() * jokesArray.length)]]);
