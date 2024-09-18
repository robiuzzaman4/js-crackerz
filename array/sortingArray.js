// You will be given an array of foods, with each food being an object with two properties: name and price.

// Create a function that has the foods array as an argument and return the foods objects sorted by price in ascending order.

// Input: [
//     { name:"burger", price:50 },
//     { name:"fries", price:10 },
//   ];
//   Output: [
//     { name:"fries", price:10 },
//     { name:"burger", price:50 },
//   ];

function sortingArray(array) {
  const sortedArray = array.sort((a, b) => a.price - b.price);
  return sortedArray;
}

console.log(
  sortingArray([
    { name: "burger", price: 50 },
    { name: "chocolate", price: 2.5 },
    { name: "fries", price: 10 },
  ])
);
