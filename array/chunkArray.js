// Problem 1: Array Chunking
// Given an array and a size, split the array items into a list of arrays of the given size. For example:

// Input: ([1, 2, 3, 4, 5], 2) returns [[1, 2], [3, 4], [5]]
// Input: ([1, 2, 3, 4, 5], 3) returns [[1, 2, 3], [4, 5]]
// Input: ([1, 2, 3, 4, 5, 6, 7, 8], 3) returns [[1, 2, 3], [4, 5, 6], [7, 8]]

function chunkArray(inputArray, size) {
    let result = [];
    if (size <= 0) return [];
  
    for (let i = 0; i < inputArray.length; i += size) {
      const chunk = inputArray.slice(i, i + size);
      result.push(chunk);
    }
  
    console.log(result);
    
  }
  
  chunkArray([1, 2, 3, 4, 5], 2);