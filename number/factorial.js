// factorial
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}
const factorialOutput = factorial(5);
