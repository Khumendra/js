function sayHello(name) {
  console.log("Hello There, Makku!!!");
  //   console.log("Hello There", name);
  console.log(`Hello There ${name}! How are you`);
}

// sayHello(); // calling a function
sayHello((name = "makku"));
// sayHello();

// refering a function
// hello = sayHello;
// hello();

function namstey() {
  return "Hello in India";
}
// console.log(namstey);
// console.log(namstey());
var greetings = namstey();
console.log(greetings);

// console.log(sayHello('makku')); // by default every functions returns undefind
