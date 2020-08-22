// this : For all function calls, this points to  window Object.
// function calls => window Object

console.log(this);

var user = {
  firstName: "Makku",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line 11 ", this);
    function sayHello() {
      console.log("Hello");
      console.log("Line 13", this);
    }

    sayHello(); // Regular function calls
  },
};

user.getCourseCount();


