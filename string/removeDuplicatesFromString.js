// Remove Duplicates from a String
// Write a function to remove duplicate characters from a string.

function removeDuplicatesFromString(str) {
  let freshArray = [];

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!freshArray.includes(letter)) {
      freshArray.push(letter);
    }
  }

  return freshArray.join("");
}

// Test cases
console.log(removeDuplicatesFromString("hello")); // "helo"
console.log(removeDuplicatesFromString("javascript")); // "javscript"
