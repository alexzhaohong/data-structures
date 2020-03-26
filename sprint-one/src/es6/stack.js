class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }
  pop() {
    var keys = Object.keys(this.storage);
    var last = keys[keys.length - 1];
    var lastProp = this.storage[last];

    delete this.storage[last];
    return lastProp;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}

