// rotate array
function rotateArray(arr, k) {
  const n = arr.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = arr[(n - k + i) % n];
  }

  return result;
}
const rotateArrayOutput = rotateArray([1, 2, 3, 4, 5], 2);
