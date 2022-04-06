/* 
If the index is less than zero or greater than the length,
return undefined
If the index is the same as the length-1, pop
If the index is 0, shift
Otherwise, using the get method, access the node at the
index 1
Set the next property on that node to be the next of the
next node
Decrement the length
Return the value of the node removed
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
  pop() {
    if (!this.length) return undefined;
    if (this.length == 1) {
      let popped = this.head;
      this.tail = this.head = null;
      this.length = 0;
      return popped;
    };

    let current = this.head;
    let prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;

    this.length--;
    return current
  }
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return current;
  }
  remove(index) {
    if (index > this.length || index < 0) return false;
    if (index == this.length - 1) { return this.pop(index); };
    if (index == 0) { return this.shift(index); };

    let prevNode = this.get(index - 1);
    const removed = prevNode.next;
    
    prevNode.next = prevNode.next.next; //removed.next
    this.length--;

    return removed;
  }
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('There');
list.push('!');
list.push('hello');

console.log('--------------------');
console.log(list.remove(0));
console.log('--------------------');
console.log(list.remove(1));
console.log('--------------------');
console.log(list.remove(3));
console.log('--------------------');
console.log(list.remove(9));