var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
};

treeMethods.contains = function(target) {
};

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