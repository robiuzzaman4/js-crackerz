// ========================
// ========== 01 ==========
// ========================

// Find the First Non-Repeating Character
// Write a function to find the first character in a string that does not repeat.

function firstNonRepeatingCharacter(string) {
  const nonRepeatedArray = [];

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!nonRepeatedArray.includes(element)) {
      nonRepeatedArray.push(element);
    } else {
      const index = nonRepeatedArray.indexOf(element);
      nonRepeatedArray.splice(index, 1);
    }
  }

  return nonRepeatedArray;
}

// Test cases
// console.log(firstNonRepeatingCharacter("aabccde")); // "b"
// console.log(firstNonRepeatingCharacter("aabb")); // null (no non-repeating character)

// ========================
// ========== 02 ==========
// ========================
/**
 * 3. Capitalize the First Character of Each Word
 * Description: Write a function that capitalizes the first character of each word in a string.
 * Example: capitalizeWords("hello world"); // Output: "Hello World"
 *
 * Requirements:
 * 1. The function should handle multiple spaces between words.
 * 2. The function should handle empty strings.
 */
function capitalizeWords(string) {
  if (string.length === 0) {
    return "enter a valid string";
  }

  const trimed = string.replace(/\s+/g, " ");
  const splited = trimed.split(" ");

  const capitalized = splited.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalized.join(" ");
}

// console.log(capitalizeWords("ruhan    zaman"));

// ========================
// ========== 03 ==========
// ========================

// Count Occurrences of a Character
// Write a function to count how many times a specific character appears in a string.

function countCharacterOccurrences(str, char) {
  let charCount = 0;

  for (let i = 0; i < str.length; i++) {
    const currentStr = str[i];
    if (currentStr === char) {
      charCount++;
    }
  }

  return charCount;
}

// Test cases
// console.log(countCharacterOccurrences("hello", "l")); // 2
// console.log(countCharacterOccurrences("mississippi", "s")); // 4

// ========================
// ========== 04 ==========
// ========================
// Find the second largest.
// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

// Sample Input: [10,33,5,99,6]

// Sample output: 33

function findSecondLargest(numbers) {
  let firstLargest = 0;
  let secondLargest = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}
// console.log(findSecondLargest([10, 33, 5, 99, 6]));
