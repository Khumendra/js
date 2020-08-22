var testArray = [2, 4, 5, 6, 7, 8, 9, 10, 0];
// console.log(testArray.length);

// console.log(testArray.fill("h"));
// console.log(testArray.fill("😊", 3));
// console.log(testArray.fill("h", 5, 7));

// console.log("New length of the Array:", testArray.push(10));

const myNumber = [22, 23, 58, 65, 15, 14, 25, 85, 55];

const result = myNumber.filter((number) => number >= 55);
// console.log(result);

// Slice() and Splice()

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
// console.log(users.slice());
// console.log(users.slice(1));
// console.log(users.length - 1);
// console.log(users.slice(1, 3));

users.splice(1, 2, "🙋‍♀️‍", "👋", "Hi", "Bye","Good Night");
console.log(users);