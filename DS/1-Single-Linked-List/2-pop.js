/* 
Here we want to pop items from the list.
So first we check if there is any items otherwise we return null.
Then we check if there is only one item then we reset the instant our SinglyLinkedList (head null; tail null; length 0).

If non of the above applies we set a current val to be the head then as long as this current has a next (current is not the tail), then we just set the prev val to be the current and the current equal the next.
We do this until current.next will be set to null (when there is no next) then our current will be the pointing at the val of the tail and the prev is the val previous to the tail.

Now we set the tail to be the prev and we set the tail.next to be null (to sever the link to the next node).

Also, we decrement the length and return the popped val (the current variable).
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
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('There');
list.push('!');

console.log(list.pop());
console.log(list);
console.log('--------------------');
console.log(list.pop());
console.log(list);
console.log('--------------------');
console.log(list.pop());
console.log(list);
console.log('--------------------');
console.log(list.pop());
console.log(list);
