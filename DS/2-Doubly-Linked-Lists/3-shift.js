/* 
If length is 0, return undefined
Store the current head property in a variable (we'll,call
it old head)
If the length is one {
  set the head to be null
  set the tail to be null
}
Update the head to be the next of the old head
Set the head's prev property to null
Set the old head's next to null
Decrement the length
Return old head
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
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
}

const list = new DoublyLinkedList();
list.push('hi');
list.push('There');
list.push('!');

console.log(list);
console.log('--------------------');
console.log(list.shift());
console.log(list);
console.log('--------------------');
console.log(list.shift());
console.log(list);
console.log('--------------------');
console.log(list.shift());
console.log(list);
console.log('--------------------');
console.log(list.shift());
console.log(list);


