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
