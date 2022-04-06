/* 
If the index is less than zero or greater than the length, return
false
If the index is the same as the length, push a new node to the
end of the list
.If the index is 0, unshift a new node to the start of the list
. Otherwise, using the get method, access the node at the index
1
.Set the next property on that node to be the new node
Set the next property on the new node to be the previous next
.Increment the length
Return true 
Note: return !!value is the same as return true if there is a value
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

  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index == this.length) { return !!this.push(val); };
    if (index == 0) { return !!this.unShift(val); };

    const newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    newNode.next = nextNode;
    prevNode.next = newNode;

    return true;
  }
}

const list = new SinglyLinkedList();
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