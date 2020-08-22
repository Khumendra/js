// Light intro to THIS in javascript
// TODO part 1 for this keyword

console.log(this); //Try this in browser console also

var game = "basketball";

function sayName() {
  var name = "Hitesh";
  console.log(this);
}

sayName();