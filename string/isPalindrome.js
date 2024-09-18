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
