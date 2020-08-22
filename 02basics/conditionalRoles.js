// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content


var user = "user";

switch (user) {
    case "admin":
        return console.log("Gets full access!");
        break;
    case "subadmin":
        return console.log("gets access to create/delete courses!");
        break;
    case "testprep":
        return console.log("Gets access to create/delete tests!");
        break;
    case "user":
        console.log("Gets access to consume content!");
        break;
    
    default:
        return console.log("Trial User!");
        break;
}