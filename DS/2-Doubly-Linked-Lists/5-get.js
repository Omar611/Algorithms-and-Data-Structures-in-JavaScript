/* 
If the index is less than O or greater or equal to the length, return
null
If the index is less than or equal to half the length of the list {
  Loop through the list starting from the head and loop
  towards the middle
  Return the node once it is found
}
If the index is greater than half the length of the list {
  Loop through the list starting from the tail and loop towards
  the middle
  Return the node once it is found
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
}

const list = new DoublyLinkedList();
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

