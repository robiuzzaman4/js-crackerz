// Convert to Title Case
// Write a function to convert a string to title case (each word capitalized).

// way - 1
// function toTitleCase(str) {
//   let result = "";
//   const trimmedString = str.replace(/\s+/g, " ");
//   const splitedStr = trimmedString.split(" ");
//   for (const word of splitedStr) {
//     result = result + " " + (word.charAt(0).toUpperCase() + word.slice(1));
//   }
//   return result;
// }

// way - 2
function toTitleCase(str) {
  const trimmedString = str.replace(/\s+/g, " ");
  const words = trimmedString.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restLetter = word.slice(1).toLowerCase();
    return firstLetter + restLetter;
  });

  return capitalizedWords.join(" ");
}

// Test cases
console.log(toTitleCase("hello    world")); // "Hello World"
console.log(toTitleCase("javascript is cool")); // "Javascript Is Cool"
