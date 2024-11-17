console.log("Start"); // order - 1

setTimeout(() => {
  console.log("Timeout 1"); // order - 5
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1"); // order - 3
});

console.log("End"); // order - 2

setTimeout(() => {
  console.log("Timeout 2"); // order - 6
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2"); // order - 4
});
