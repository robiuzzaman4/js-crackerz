function findSecondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => b - a);

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return null;
  }
}

const output = findSecondLargest([12, 6, 28, 34, 21, 28, 19]);
console.log(output); // 28
