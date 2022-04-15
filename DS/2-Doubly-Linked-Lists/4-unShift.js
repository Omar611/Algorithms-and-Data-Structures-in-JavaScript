/* 
Create a new node with the value passed to the function
If the length is 0 {
  Set the head to be the new node
  Set the tail to be the new node
}
Otherwise {
  Set the prev property on the head of the list to be the
  new node
  Set the next property on the new node to be the head
  property
  Update the head to be the new node
}
Increment the length
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  unShift(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push('hi');
list.push('There');
list.push('!');

console.log(list);
console.log('--------------------');
console.log(list.unShift('New head'));
console.log('--------------------');
console.log(list.unShift('Newer head'));
console.log('--------------------');

