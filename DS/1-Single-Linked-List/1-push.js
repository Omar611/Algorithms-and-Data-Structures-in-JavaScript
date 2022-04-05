
/* 
Now here we have this Node class that accepts a val and have next prop to point to a next val.

Then in our SinglyLinkedList class we have a head and a tail props and we appoint a vals to them. The first val gets converted to a Node with no next function and we have the head and the tail pointing to that new Node.
Then when we add another val we get the last created Node (from the tail) and we pint the "next" of that Node to the new val. Then we point the tail to the new Node.

Ex)
We have 10 as our first val. Now the head and tail will be pointing at a node with val  =10 and next = null.

Head--> [[Node(10)]]--next--> null
tail-----^

Then we add the val 20 now we get the node of the head and the tail (Same/only node) and point it's next to the new node with the new val. Then point the tail to  new node.

[[Head--> Node(10)]]--next--> [[tail-->Node(20)]]--next-->null

Then we add another val 30 now the tail at node val 20 will have it's next pointing to it. Then the tail itself will point to it.
So the head will still have val 10 and next 20 and the 20 (which used to be the tail) now have val 20 and point to the new tail 30.

[[Head--> Node(10)]]--next--> [[Node(20]]--next--> [[tail-->Node(30)]]--next-->null
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
}

const list = new SinglyLinkedList();
list.push('hi');
list.push('There');
list.push('!');


console.log(list.head.next.next);
