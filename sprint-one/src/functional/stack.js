var Stack = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var lastKey = keys[keys.length - 1];
    var lastProp = storage[lastKey];

    delete storage[lastKey];
    return lastProp;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

