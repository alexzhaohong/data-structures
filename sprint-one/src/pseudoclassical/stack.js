var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function () {
  var keys = Object.keys(this.storage);
  var last = keys[keys.length - 1];
  var lastProp = this.storage[last];

  delete this.storage[last];
  return lastProp;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

var stacks = new Stack();
