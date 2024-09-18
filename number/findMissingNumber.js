// findMissingNumber
function findMissingNumber(arr, n) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }

  const totalSum = (n * (n + 1)) / 2;
  const diffrence = totalSum - sum;
  return diffrence;
}
const result = findMissingNumber([1, 2, 3, 5, 6], 6);
console.log(result);
