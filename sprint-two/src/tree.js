var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fixed
  // we need to extend all the methods from treeMethods into newtree-
  Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
// to add a child we need to call the same function on the value
  var child = Tree(value);
  // console.log(child, 'Child');
  // we push it to the children's array
  this.children.push(child);

  //console.log(this.children, 'Children');
};

treeMethods.contains = function(target) {
  // check if the first value in newTree.value is the target that we are looking for
  this.value === target ? true : false;

  // since children is an array we can iterate over length
  for (var i = 0; i < this.children.length; i++) {
    // check all of them
    var child = this.children[i];

    // if it doesnt find it return false;
  }
  return false;
};

var test = Tree()
test.addChild(2);
test.addChild(12);
test.addChild(23);
test.addChild(34);
test.contains(1);
test.contains(2);
test.contains(12);

/*
Tree() constructor
*****Justification*****
Hierarchical recursive data structure great for family trees

*****Specification*****
I:NA
O:Tree Object
  Side Effects: NA
  Edge case: NA

*****Explanation*****
A tree with a root node that has any number of chilren nodes, arrays containing a number of subtrees. For methods, it takes any value, sets that as the target of a node, and adds that node as a child of the tree. O(n)
contains() takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node O(n)
*/