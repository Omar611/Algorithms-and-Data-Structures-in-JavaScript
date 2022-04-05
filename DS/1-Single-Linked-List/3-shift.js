/* 
If there are no nodes, return undefined.
Store the current head property in a variable.
Set the head property to be the current head's next
property.
Decrement the length by 1.
Return the value of the node removed.
check if length is 0 then set tail to null.
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
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    if(!this.length) {
      this.tail = null;
    }
    return current;
  }
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('There');
list.push('!');

console.log(list);
console.log('--------------------');
console.log(list.shift());
console.log('--------------------');
console.log(list.shift());
console.log('--------------------');
console.log(list.shift());
console.log('--------------------');
console.log(list.shift());
console.log('--------------------');
console.log(list);

