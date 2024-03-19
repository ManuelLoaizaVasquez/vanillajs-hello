/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["My computer", "The compiler", "My algorithm", "The theorem"];
  let action = [
    "crashed",
    "overflowed",
    "failed to converge",
    "threw an exception"
  ];
  let what = ["my code", "the data structure", "the proof"];
  let when = [
    "during compilation",
    "while running the test cases",
    "when I was debugging"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
};
