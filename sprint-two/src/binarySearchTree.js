// es6 instantiation pattern
var array = [];
class BinarySearchTree {
  // properties
  constructor(value) {
    this.value = value; // strings, numbers
    this.left = null; // {BST}
    this.right = null; // {BST}
    this.array = [];
  }
  // methods

  insert(value) {
    // if value is already in BST, assert error
    // else if this.contains(value) === false, run everything

    // Go left
    if (value < this.value) {
      if (!this.left) {
        var child = new BinarySearchTree(value);
        this.left = child;
      } else if (this.left) { // if its filled ---
        this.left.insert(value);
      }
    }

    // Go left -- Same for Go right
    // if value from insert is less than initial(parent) value
      // if left is not filled = if its not true = if it is empty/null
      // create a new node filled with value
       // set new node as parent's left node ----the left node is equal to this value----
        // if its filled -
          // Redo, but left node is now parent


    // Go right
    if (value > this.value) {
      if (!this.right) {
        var child = new BinarySearchTree(value);
        this.right = child;
      } else if (this.right) {
        this.right.insert(value);
      }
    }
  }
  contains(target) {
    // if the parent node is the target return true
    if (this.value === target) {
      return true;
    }
    // Go left
    // check if left is filled && target is less than the parent node value
    if (this.left && target < this.value) {
      // Check if left node (parent now) is contains our target
      if (this.left.contains(target)) {
        return true;
      }
    }

    // Go Right

    if (this.right && target > this.value) {
      // Check if left node (parent now) is contains our target
      if (this.right.contains(target)) {
        return true;
      }
    }
    // if it doesnt find it in our tree
    return false;

  }

  // .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree. O(n)
  depthFirstLog(cb) {
  // if thisNode is null, return undefined
  // else, recurse on leftNode
  // now run callback function on thisNode
  // then recurse on rightNode

    if (!this) {
      return undefined;
    }
    if (!this.left) {
      return undefined;
    }
    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    // var func = function(value) { array.push(value); };
    cb(this.value);

    if (!this.right) {
      return undefined;
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }


  }

};

var BTS = new BinarySearchTree(5);

 // .left property, a BST where all values are lower than the current value.
 // .right property, a BST where all values are higher than the current value.
 // .insert() method, which accepts a value and places it in the tree in the correct position. O(logn)
 // .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree. O(logn)
 // .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree. O(n)
 // Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.