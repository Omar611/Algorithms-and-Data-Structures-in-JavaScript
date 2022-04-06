/* 
This function should accept a value and an index
Use your get function to find the specific node.
If the node is not found, return false
If the node is found, set the value of that node to be the
value passed to the function and return true
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
  set(index, val) {
    let node = this.get(index);
    if(!node) return false;
    node.val = val;
    return true;
  }
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('There');
list.push('!');
list.push('hello');

console.log('--------------------');
console.log(list.set(0, ":)"));
console.log('--------------------');
console.log(list.set(1, "<3"));
console.log('--------------------');
console.log(list.set(3, "test"));
console.log('--------------------');
console.log(list.set(9, "test2"));

