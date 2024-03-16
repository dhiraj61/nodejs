const fs = require("fs");
const path = require("path");

const dirPath = (__dirname, "files");
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/home" + i + ".txt", "Hello, How Are You" + i);
// }
fs.readdir(dirPath, (err, files) => {
  files.forEach((items) => {
    console.log("File Name: " + items);
  });
});
