var name = "Makku";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. Makku";
  console.log("Line number 7", name);

  function sayNameTwo(params) {
      var name = "Mr. MC"
      console.log("Line number 11", name);
  }
}

sayName();
