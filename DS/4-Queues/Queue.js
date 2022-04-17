/* 
  Same as linked lists and unlike stacks here we push from the first to last
  Why? Because it's easier to shit from the beginning than to pop fom the  last
  If we pop from the last we will have to rearrange the entire list
*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // Here we push to the end
    const newNode = new Node(val);
    if (!this.head) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // Here we shift the first
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    const popped = this.first;
    this.first = popped.next;
    this.size--;
    return popped.value;
  }
}