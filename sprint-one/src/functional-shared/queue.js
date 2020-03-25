var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;

  Object.assign(someInstance, queueMethods);

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
    var lastProp = this.storage[first];

    delete this.storage[first];
    return lastProp;
  },
  size() {
    return Object.keys(this.storage).length;
  }
};


