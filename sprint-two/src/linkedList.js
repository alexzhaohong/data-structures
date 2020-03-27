/* eslint-disable indent */
var LinkedList = function() {
  var list = {};
  list.head = null; // reference to another Node object
  list.tail = null; // reference to another Node object

  // addtoTail() takes a value and adds it to the end of the list
  list.addToTail = function(value) {
  // create a temporary variable, set to Node with value of "value"3
  var temp = Node(value);
  // if list is empty, set head and tail to tempNode
    if (!list.head) {
      list.head = temp;
    }
  // if there is a tail
  // tail.next changes from null to tempNode
    if (list.tail) {
      list.tail.next = temp;
    }
    list.tail = temp;
  // tail becomes tempNode list.tail = temp;
  };

// removes the first node from the list and returns its value
//list.head = 1stNode{value: 16, next: 2ndNode{} }
  list.removeHead = function() {
    //Base case: Linked list is empty
    if (list.head === null) {
      return undefined;
    }
    var temp = list.head; // null
    var temp2 = temp.value; // temp is null. null.value is WRONG
    list.head = list.head.next;
    delete temp;
    return temp2;
  };

  // returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {

// whole temp is a node
    var temp = list.head;
    while ( temp ) {
    if (temp.value === target) {
      return true;
    } else {
      temp = temp.next;
    }
    }
    return false;
    };
  return list;
};





var Node = function(value) {
  var node = {};

  node.value = value; //strings and numbers
  node.next = null; // reference to another Node object

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
# Justification*****
A linked list would be great for an itinerary you expect to add and remove destinations to and from.

# Specification****
Constructor function/maker function
Input: NA
Output: LinkedList Class Object that has methods to create Node Class Objects
  Side effects: Create a new instance of an object
  Edge case:

# Explanation****
A dynamic data structure that has Constant time insertion/removal, but is not indexed, with linear time traversal for reading/updating. Keeps track of the first and last Node instance, but none of the others. Can add a value to the end of the list O(1), remove the first node O(1), and check for a contained value O(n).

# Visualization****

# Approximation****
# Verification*****
# Implementation****
*/
