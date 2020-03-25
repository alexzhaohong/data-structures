var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};
// first in first out
Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function () {
  var keys = Object.keys(this.storage);
  var first = keys[0];
  var firstProp = this.storage[first];

  delete this.storage[first];
  return firstProp;
};
Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

var queue = new Queue();