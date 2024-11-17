console.log("A"); // order - 1

setTimeout(() => {
  console.log("B"); // order - 7
}, 100);

setTimeout(() => {
  console.log("C"); // order - 5
}, 0);

Promise.resolve().then(() => {
  console.log("D"); // order - 3
});

console.log("E"); // order - 2

queueMicrotask(() => {
  console.log("F"); // order - 4
});

setTimeout(() => {
  console.log("G"); // order - 6
}, 50);
