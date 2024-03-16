const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/file2.txt`;

// fs.writeFileSync(filePath, "Hello How are You");

// fs.readFile(filePath, "utf-8", (err, items) => {
//   console.log(items);
// });

// fs.appendFile(filePath, " and this is file1.txt", (err) => {
//   if (!err) {
//     console.log(`Data appended to ${filePath}`);
//   }
// });

// fs.rename(filePath, `${dirPath}/file3.txt`, (err) => {
//   if (!err) {
//     console.log("The file has been renamed!");
//   }
// });

fs.unlinkSync(`${dirPath}/file3.txt`);
