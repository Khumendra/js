var user = {
  firstName: "Makku",
  lastName: "Sinha",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    if (this.courseList.includes(courseName)) {
      return `${courseName} already exists`;
    } else {
      this.courseList.push(courseName);
    }
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("ReactJs");
user.buyCourse("Angular Js");
user.buyCourse("ReactJs");
user.buyCourse("Django");

console.log(user.getCourseCount());
