var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;

  Object.assign(someInstance, stackMethods);
  return someInstance;

};

var stackMethods = {
  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop() {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    var lastProp = this.storage[lastKey];
    delete this.storage[lastKey];
    
    return lastProp;
  },
  size() {
    return Object.keys(this.storage).length;
  }
};


