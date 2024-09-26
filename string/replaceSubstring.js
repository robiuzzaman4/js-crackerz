// Replace a Substring
// Write a function to replace all occurrences of a substring within a string with a new substring.

function replaceSubstring(str, find, replace) {
  const regex = new RegExp(find, "g");
  return str.replace(regex, replace);
}

// Test cases
console.log(replaceSubstring("hello world", "world", "everyone"));
// "hello everyone"
console.log(replaceSubstring("abc abc abc", "abc", "xyz"));
// "xyz xyz xyz"
