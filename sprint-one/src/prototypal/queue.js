var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue() {
    var keys = Object.keys(this.storage);
    var first = keys[0];
    var firstProp = this.storage[first];
    delete this.storage[first];

    return firstProp;
  },
  size() {
    return Object.keys(this.storage).length;
  }
};


