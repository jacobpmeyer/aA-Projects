// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const node = new Node(val, null);

    if (!this.tail) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    let node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return node;
    }

    for (let i = 0; i < this.length - 1; i++) {
      const tail = this.tail;

      if (i === this.length - 2) {
        node.next = null;
        this.tail = node;
        this.length -= 1;

        return tail;
      }

      node = node.next;
    }
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let node = new Node(val, null);
    if (!this.length) {
      this.head = node;
      this.tail = node;
      this.length += 1;
    } else {
      const head = this.head;
      this.head = node;
      this.head.next = head;
      this.length += 1;
    }
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.length) return undefined;

    const head = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return head;
    }

    this.head = this.head.next;
    this.length -= 1;

    return head;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      if (node.value === target) return true;
      node = node.next;
    }

    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index > this.length) return null;

    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === index) return node;
      node = node.next;
    }
  }

  // TODO: Implement the set method here
  set(index, val) {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        node.value = val;
        return true;
      }
      node = node.next;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index >= this.length) return false;

    let node = this.head;
    let newNode = new Node(val, null);
    let nextNode;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1 || index === 0) {
        this.length += 1;
        nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;
        return true;
      }
      node = node.next;
    }
  }

  // TODO: Implement the remove method here
  remove(index) {
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) {
        const nextNode = node.next;
        node.next = nextNode.next;
        this.length -= 1;

        return nextNode;
      }
    }
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
