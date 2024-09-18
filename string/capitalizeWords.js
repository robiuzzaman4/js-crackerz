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
  if (string === "") {
    return "Please enter a string";
  }
  const trimmedString = string.replace(/\s+/g, " ");
  const splitedWords = trimmedString.split(" ");
  const capitalizedWords = splitedWords.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords;
}

const result = capitalizeWords("ruhan    zaman");
console.log(result);
