// functional with shared method pattern
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




//contains() takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node O(n)
//input target value
//output boolean
treeMethods.contains = function(target) {

// make var found, set to false
  var found = false;
// check node at right now. if node value === target value
//  return found = true
  if ( this.value === target ) {
    found = true;
    return found;
  }

    // else if node.children is undefined
    // return found = false
  if (this.children.length === 0) {
    found = false;
    return found;
  }

    // else if node.children is defined
    // access all the children of node, iterate (newTree.children = [];) for i++
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      // method contains on current element.this.children[i]
      // store this.contains(children[i]) in found
      var bool = this.children[i].contains(target);
      // if found === true )
      if (bool === true) {
        return found = bool;
      }
    }
  }

  return found;

};


var test = Tree(2);
test.addChild(12);
test.addChild(23);
test.addChild(34);
test.contains(1);
test.contains(2);
test.contains(12);

// check node at right now. if node value === target value
//  return found = true
// else if node.children is undefined
  // return found = false


// else if node.children is defined
  // access all the children of node, iterate (newTree.children = [];) for i++
    // method contains on current element.this.children[i]
    // store this.contains(children[i]) in found
    //if found === true )
      // break;

// return found













  // var found = false;

  // // check if the first value in newTree.value is the target that we are looking for
  // found = (this.value === target) ? true : false;
  // // since children is an array we can iterate over length
  // for (var i = 0; i < this.children.length; i++) {
  //   // check all of them
  //   var child = this.children[i];

  //   if (this.contains(child)) {
  //     found = true;
  //   }

  //   // if it doesnt find it return false;
  // }
  // return found;



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