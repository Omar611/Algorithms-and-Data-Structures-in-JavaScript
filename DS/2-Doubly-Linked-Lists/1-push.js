/* 
Create a new node with the value passed to the function
If the head property is null set the head and tail to be the newly created node
If not, set the next property on the tail to be that node Set the previous property on the newly created node to be the tail
Set the tail to be the newly created node Increment the length
Return the Doubly Linked List
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
}

const list = new DoublyLinkedList();
console.log(list.push('hi'));
console.log(list.push('There'));
console.log(list.push('!'));

console.log('--------------------------');
console.log(list.head.next.next);
console.log(list.head.next.prev);
