// const names = ["Youtube", "facebook", "instagram", "Netflix", "Amazon"];

// for (const name of names) {
//     console.log(name);

// }

const symbols = {
  yt: "youtube",
  ig: "instagram",
  fb: "facebook",
  lco: "LearnCodeOnline.in",
};

for (const key in symbols) {
  console.log(`${key} = ${symbols[key]}`);
}
