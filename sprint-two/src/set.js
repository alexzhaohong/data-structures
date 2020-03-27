var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.bank = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = null;
  console.log(this._storage[item]);
  console.log(Object.keys(this._storage));
  console.log(this._storage);
};

setPrototype.contains = function(item) {
  arrKeys = Object.keys(this._storage);
  return ( arrKeys.includes(item) ) ? true :
    false;
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)){
    delete this._storage[item]
  }
};
