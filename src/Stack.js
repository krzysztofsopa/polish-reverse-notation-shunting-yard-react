class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    if (this.items.length > 0) {
      return this.items.splice(this.items.length - 1, 1)[0];
    }
  }

  push(item) {
    this.items.push(item);
  }

  top() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    }
  }

  reverse() {
    let stack = new Stack();

    while (!this.isEmpty()) {
      stack.push(this.pop());
    }

    return stack;
  }

  itemsCount() {
    return this.items.length;
  }

  isEmpty() {
    return 0 == this.itemsCount();
  }

  clear() {
    this.items = [];
  }
};

module.exports = Stack;
