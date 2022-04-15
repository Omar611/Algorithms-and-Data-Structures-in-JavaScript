/* 
If there is no head, return undefined
Store the current tail in a variable to return later
If the length is 1, set the head and tail to be null
Update the tail to be the previous Node.
Set the newTail's next to null
Decrement the length
Return the value removed
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
  pop() {
    if (!this.head) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
}

const list = new DoublyLinkedList();
list.push('hi');
list.push('There');
list.push('!');

console.log(list.pop());
console.log(list);
console.log('--------------------');
console.log(list.pop());
console.log(list);
console.log('--------------------');
console.log(list.pop());
console.log(list);
console.log('--------------------');
console.log(list.pop());
console.log(list);
