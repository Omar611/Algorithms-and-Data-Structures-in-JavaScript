class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // Unlike linked lists here we push from the first to last
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    // Here we also pop the first not the last (we shift)
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    const popped = this.first;
    this.first = popped.next;
    this.size--;
    return popped;
  }
}