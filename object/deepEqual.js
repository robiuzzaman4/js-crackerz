/**
 * 
 * Problem 2: Deep Equality Checker
 * Write a function that checks if two objects (and their nested objects) are equal. For example:

 * Input: {a: 1, b: {c: 1}}, {a: 1, b: {c: 1}} returns true
 * Input: {a: 1, b: {c: 2}}, {a: 1, b: {c: 1}} returns false
 */

function deepEqual(obj1, obj2) {
  // First, check if the two items are the same type and both are either null or not objects (primitives)
  if (obj1 === obj2) {
    return true;
  }

  // If either is not an object and thus, both aren’t the same type, return false
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 == null ||
    obj2 == null
  ) {
    return false;
  }

  // Get keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If number of properties is different, objects are not the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check each key in the first object
  for (let key of keys1) {
    // Ensure the second object has the property and recursively check deep equality
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  // If all checks passed, objects are deeply equal
  return true;
}
