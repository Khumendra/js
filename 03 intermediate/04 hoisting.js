// Context
//     - Global Context
//     - Execution Context

// Execution Context
//     - Variable Object
//     - Scope Chain
//     - this

// - Function declarations are scanned and made available
// - Variable declarations are scanned and made undefined

tipper("5");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

// code hoisting

// bigtipper(12);

// var bigtipper = function (a) {
//   var bill = parseInt(a);
//   console.log(bill + 15);
// };

console.log(name);
var name = "makku";

function sayName() {
  var name = "Mr. M";
  console.log(name);
}
// sayName();

console.log(name);

