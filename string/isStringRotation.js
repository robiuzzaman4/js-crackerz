// Write a function that takes two strings as input and determines if one string is a rotation of the other.

function isStringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return (str1 + str1).includes(str2);
}

const output = isStringRotation("hello", "hello");
console.log(output);
