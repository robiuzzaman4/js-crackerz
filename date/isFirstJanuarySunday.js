// Sunday on January 1st Checker
// Design a JavaScript function that takes a year as input and determines whether January 1st of that year falls on a Sunday.

// The function should return "YES" if January 1st is a Sunday, and "NO" otherwise

function isFirstJanuarySunday(year) {
  const date = new Date(year, 0, 1);
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

const output = isFirstJanuarySunday(2000);
console.log(output);
