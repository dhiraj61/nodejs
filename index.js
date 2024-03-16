// console.log("starting process");

// // console.log("Logical Process");

// setTimeout(() => {
//   console.log("Logical Process");
// }, 2000);

// console.log("Process Completed");

let a = 10;
let b = 0;

console.log("a: " + a + ", b: " + b);

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
