console.log("starting process");

setTimeout(() => {
  console.log("execute after 2 second");
}, 2000);

setTimeout(() => {
  console.log("execute after 0 second");
});

console.log("process Completed");
