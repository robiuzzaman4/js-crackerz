/**
 * 5. Find the Largest Number in an Array
 * Description: Write a function that takes an array of numbers and returns the largest number in the array.
 * Example: findLargest([1, 5, 3, 9, 2]); // Output: 9
 *
 * Requirements:
 * 1. The function should handle arrays with a single number.
 * 2. The function should handle arrays with negative numbers.
 */

function findLargest(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }
  let largest = numbers[0];

  for (const num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

const output1 = findLargest([1, 5, 3, 9, 2]);
const output2 = findLargest([-1, -2, 30, -4]);
console.log(output1);
console.log(output2);
