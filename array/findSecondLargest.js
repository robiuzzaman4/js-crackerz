// Find the second largest.
// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

// Sample Input: [10,33,5,99,6]

// Sample output: 33

function findSecondLargest(numbers) {
  let firstLargest = 0;
  let secondLargest = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

const output = findSecondLargest([10, 33, 5, 99, 6]);
console.log(output);
