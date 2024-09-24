// make a custom array

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // push method - [push an item to the last position]
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // pop method - [remove an item from the last position]
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  // shift method - [remove first item from the actual object and re-indexing rest items]
  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  // at method - [get a specific item based on index]
  at(index) {
    return this.data[index];
  }

  // delete method - [delete a specific item based on index]
  delete(index) {
    const item = this.data[index];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }
}

const myArray = new Array();
myArray.push("apple");
myArray.push("mango");
myArray.push("banana");

console.log("log: ", myArray.delete(0));

console.log(myArray);
