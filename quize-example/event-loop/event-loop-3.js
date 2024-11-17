console.log("1"); // order - 1

setTimeout(() => {
  console.log("2"); // order - 6
}, 0);

Promise.resolve().then(() => {
  console.log("3"); // order - 3
});

console.log("4"); // order - 2

setTimeout(() => {
  console.log("5"); // order - 7
}, 0);

Promise.resolve().then(() => {
  console.log("6"); // order - 4
});

queueMicrotask(() => {
  console.log("7"); // order - 5
});
