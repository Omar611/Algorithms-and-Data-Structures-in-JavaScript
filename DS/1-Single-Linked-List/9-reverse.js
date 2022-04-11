/* 
Swap the head and tail
Create a variable called next
Create a variable called prev
Create a variable called node and initialize it to the head
property
Loop through the list
Set next to be the next property on whatever node is
Set the next property on the node to be whatever prev is
Set prev to be the value of the node variable
Set the node variable to be the value of the next variable
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('6');

list.reverse();

// Helper function for testing
function print(list) {
  var arr = [];
  var current = list.head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  console.log(arr);
}
console.log('--------------------');
print(list);
console.log('--------------------');
