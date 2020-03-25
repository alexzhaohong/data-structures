var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {
  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop() {
    var keys = Object.keys(this.storage);
    var last = keys[keys.length - 1];
    var lastProp = this.storage[last];

    delete this.storage[last];
    return lastProp;
  },
  size() {
    return Object.keys(this.storage).length;
  }
};


