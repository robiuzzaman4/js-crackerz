// Check for Palindrome
// Write a function to check if a string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
