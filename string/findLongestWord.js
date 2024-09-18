// Find the Longest Word
// Write a function to find the longest word in a string.

// way - 1
// function findLongestWord(str) {
//   let longest = "";
//   const splited = str.split(" ");
//   longest = splited.sort((a, b) => b.length - a.length)[0];
//   return longest;
// }

// way - 2
function findLongestWord(str) {
  let longest = "";
  const splited = str.split(" ");

  // === using for loop ===
  //   for (let i = 0; i < splited.length; i++) {
  //     const letter = splited[i];
  //     if (letter.length > longest.length) {
  //       longest = letter;
  //     }
  //   }

  // === using for of loop ===
  for (const letter of splited) {
    if (letter.length > longest.length) {
      longest = letter;
    }
  }
  return longest;
}

// Test cases
console.log(findLongestWord("The quick brown fox")); // "quick"
console.log(findLongestWord("JavaScript is fun")); // "JavaScript"
