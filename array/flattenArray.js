/**
 * 7. Flatten a Nested Array
 * Description: Write a function that takes a nested array and returns a new array with all sub-array elements concatenated into it recursively.
 * Example: flattenArray([1, [2, [3, 4], 5]]); // Output: [1, 2, 3, 4, 5]
 *
 * Requirements:
 * 1. The function should handle arrays with various levels of nesting.
 * 2. The function should handle arrays with mixed types of elements.
 */

function flattenArray(array) {
  if (array.length === 0) {
    return "Please enter a valid array";
  }

  let result = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  });

  return result;
}

const output = flattenArray([1, [2, [3, 4], { name: "Ruhan" }, 5]]);
console.log(output);
