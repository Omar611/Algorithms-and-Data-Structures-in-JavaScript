/* 
If the index is less than zero or greater than or equal to the length return false
If the index is 0, unshift
If the index is the same as the length, push
Use the get method to access the index -1
Set the next and prev properties on the correct nodes to link everything together
Increment the length
Return true
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

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index == this.length) { return !!this.push(val); };
    if (index == 0) { return !!this.unShift(val); };

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push('hi');
list.push('There');
list.push('!');
list.push('hello');

console.log('--------------------');
console.log(list.insert(0, ":)"));
console.log('--------------------');
console.log(list.insert(1, "<3"));
console.log('--------------------');
console.log(list.insert(3, "test"));
console.log('--------------------');
console.log(list.insert(9, "test2"));
console.log('--------------------');
console.log(list);
