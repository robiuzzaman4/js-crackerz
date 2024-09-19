// Repeat a String N Times
// Write a function to repeat a string n times.

function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result = result + str;
  }
  return result;
}

// Test cases
console.log(repeatString("abc", 3)); // "abcabcabc"
console.log(repeatString("xyz", 2)); // "xyzxyz"
