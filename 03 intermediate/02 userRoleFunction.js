/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with accesses to create/delete courses
testprep - with accesses to create/delete tests
user - consume all content
other - trial user
Input: getUserRole(name, role)

*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
    case "subadmin":
      return `${name} is sub-admin with accesses to create/delete courses`;
    case "testprep":
      return `${name} is testprep with accesses to create/delete tests`;
    case "user":
      return `${name} is user to consume all content`;

    default:
      return `${name} is not having any a/c `;
  }
};

var getRole = getUserRole("makku", "non-user");
console.log(getRole);