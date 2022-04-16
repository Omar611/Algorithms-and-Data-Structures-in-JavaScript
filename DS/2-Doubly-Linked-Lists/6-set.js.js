/* 
Create a variable which is the result of the
get method at the index passed to the function
If the get method returns a valid node, set the value of that node to be the value passed to the function
Return true
Otherwise, return false
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
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

const list = new DoublyLinkedList();
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

