var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is: ${this.name}`);
  },
};

var makku = Object.create(User);
console.log(makku);

makku.name = "Makku Sinha";
makku.getUserName();

var sam = Object.create(User, {
  name: { value: "Sam" },
  courseCount: { value: "3" },
});

sam.getUserName();
