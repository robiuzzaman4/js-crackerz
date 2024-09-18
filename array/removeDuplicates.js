/**
 * 6. Remove Duplicates from an Array
 * Description: Write a function that takes an array and returns a new array with all duplicates removed.
 * Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]
 *
 * Requirements:
 * 1. The function should handle arrays with all unique elements.
 * 2. The function should work with arrays containing different types of duplicates.
 */

function removeDuplicates(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }

  const freshArray = [];

  for (const num of numbers) {
    if (!freshArray.includes(num)) {
      freshArray.push(num);
    }
  }

  return freshArray;
}

const output = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(output);
