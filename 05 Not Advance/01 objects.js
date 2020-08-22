// new keyword
//__proto__

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;

  this.getCourseCount = function () {
    console.log(`Course count is : ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log("First Name: ", this.firstName);
  // console.log(`First Name: ${this.firstName}`)
};

const hitesh = new User("hitesh", 2);
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
  hitesh.getFirstName();
}
// console.log(hitesh);

console.log();
const sam = new User("sam", 1);
// console.log(hitesh);
sam.getCourseCount();
sam.getFirstName();
