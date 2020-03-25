var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var first = keys[0];
    var firstProp = storage[first];
    delete storage[first];
    return firstProp;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
