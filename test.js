const findMostFrequentElement = (arr) => {
  // declare an empty object for letter use
  let frequncy = {};

  // loop over array and set frequncy object's key, value
  for (let i of arr) {
    frequncy[i] = (frequncy[i] || 0) + 1;
  }

  let mostFrequentElement = null;
  let frequncyCount = 0;

  // loop over the frequncy object and find most frequent element
  for (let i in frequncy) {
    const element = frequncy[i];

    if (element > frequncyCount) {
      frequncyCount = element;
      mostFrequentElement = i;
    }
  }

  console.log(frequncy);
  

  // return result
  return mostFrequentElement;
};
// show result on console
console.log( findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
