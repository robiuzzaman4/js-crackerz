// Find the Frequency of Characters
// Write a function to find the frequency of each character in a string.

// way - 1
// function charFrequency(str) {
//   let frequency = {};
//   const letters = str.split("");

//   for (let i = 0; i < letters.length; i++) {
//     const letter = letters[i];
//     frequency[letter] = (frequency[letter] || 0) + 1;
//   }

//   return frequency;
// }

// way -2
function charFrequency(str) {
  let frequency = {};
  const letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (frequency[letter] === undefined) {
      frequency[letter] = 1;
    } else {
      frequency[letter]++;
    }
  }

  return frequency;
}

// Test cases
console.log(charFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
console.log(charFrequency("mississippi"));
// { m: 1, i: 4, s: 4, p: 2 }
