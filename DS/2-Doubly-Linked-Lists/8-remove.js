/* 
If the index is less than zero or greater than or equal to the length return undefined
If the index is 0, shift
If the index is the same as the length-1, pop
Use the get method to retrieve the item to be removed
Update the next and prev properties to remove the found node from the list
Set next and prev to null on the found node
Decrement the length
Return the removed node.
}
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
  get(index) {
    if (index >= this.length || index < 0) return null;
    let current, count;
    if (this.length / 2 >= index) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--
      }
    }
    return current;
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
  remove(index) {
    if (index > this.length || index < 0) return false;
    if (index == this.length - 1) { return this.pop(index); };
    if (index == 0) { return this.shift(index); };

    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    const nextNode = removed.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removed.next = removed.prev = null;
    this.length--;

    return removed;
  }
}

const list = new DoublyLinkedList();
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