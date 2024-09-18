/**
 * 4. Sum of Digits of a Number
 * Description: Write a function that finds the sum of the digits of a given number.
 * Example: sumOfDigits(1234); // Output: 10 (1 + 2 + 3 + 4)
 *
 * Requirements:
 * 1. The function should handle positive integers.
 * 2. The function should handle numbers with multiple digits.
 */

function sumOfDigits(numbers) {
  let sum = 0;

  if (numbers < 0) {
    return "Please enter positive value";
  }

  const splitedNumArray = numbers.toString().split("");

  for (const num of splitedNumArray) {
    sum += Number(num);
  }

  return sum;
}

const result = sumOfDigits(1234);
console.log(result);
