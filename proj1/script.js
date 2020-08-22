// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");
var counter = document.getElementsByClassName("counter");
var followers = document.getElementsByClassName("followers");

let count = 0;

followers_count = 1000;

setInterval(() => {
  if (count < followers_count) {
    count++;
    counter[0].innerHTML = count;
  }
}, 10);

setTimeout(() => {
  followers[0].innerHTML = `Followers on Instagram`;
}, followers_count * 10);
