// console.log("starting process");

// // console.log("Logical Process");

// setTimeout(() => {
//   console.log("Logical Process");
// }, 2000);

// console.log("Process Completed");

let a = 10;
let b = 0;

console.log("a: " + a + ", b: " + b);

setTimeout(() => {
  b = 20;
}, 2000);

console.log("a: " + a + ", b: " + b);

console.log(a + b);
