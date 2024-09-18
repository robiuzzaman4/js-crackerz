/**
 * 1. Reverse a String
 * Description: Write a function that takes a string as input and returns the string reversed.
 * Example: reverseString("hello"); // Output: "olleh"
 *
 * Requirements:
 * 1. The function should handle empty strings.
 * 2. The function should work with strings containing special characters and numbers.
 */

function reverseString(string) {
  if (string === "") {
    return "Please enter a string";
  }
  return string.split("").reverse().join("");
}

const result = reverseString("");
console.log(result);
