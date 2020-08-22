// Self Executing Anonymous Function and functional programming

// In function programming functions are treated as first-class citizen
// The hole idea behind this statement is that you have a function and
// you treat it just like a variable you can store that inside a variable. you can pass that as a parameter inside
// another function you can recieve it as a parameter inside another function

function sayHello() {
  console.log("I say hello");
  console.log("I again say hello");
}

// sayHello();

// Self Executing Anonymous Function
// function without name and No-need to call it instead we do (); like this.
// enclosed in parentheses

// IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
  console.log("I say hello");
  console.log("I again say hello");
})();

var result = (function () {
  var name = "Makku";
  return name;
})();

console.log(result);
