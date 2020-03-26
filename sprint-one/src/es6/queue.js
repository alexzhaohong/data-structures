class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var first = keys[0];
    var firstProp = this.storage[first];

    delete this.storage[first];
    return firstProp;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
