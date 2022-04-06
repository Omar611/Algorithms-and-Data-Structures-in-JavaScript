/* 
This function should accept an index
If the index is less than zero or greater than or equal to
the length of the list, return null
Loop through the list until you reach the index and
return the node at that specific index
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
  get(index) {
    if (index >= this.length || index < 0) return null;
    let val = this.head;
    while (index) {
      val = val.next;
      index--;
    }
    return val;
  }
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('There');
list.push('!');
list.push('hello');

console.log('--------------------');
console.log(list.get(0));
console.log('--------------------');
console.log(list.get(1));
console.log('--------------------');
console.log(list.get(2));
console.log('--------------------');
console.log(list.get(3));
console.log('--------------------');
console.log(list.get(-1));
console.log('--------------------');
console.log(list.get(9));
console.log('--------------------');
