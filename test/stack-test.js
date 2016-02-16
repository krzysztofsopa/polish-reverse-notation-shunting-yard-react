var assert = require('assert');
var Stack = require('../src/utils/stack');

describe('Stack', function() {
  describe('Test pop() method', function () {
    let stack = new Stack();

    it('It should return in reverse order items added to stack', function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      assert.equal(stack.pop(), 3);
      assert.equal(stack.pop(), 2);
      assert.equal(stack.pop(), 1);
    });

    it('It should return undefined when nothing added to stack', function () {
      assert.equal(stack.pop(), undefined);
      assert.equal(stack.pop(), undefined);
    });

    it('It should return undefined when added two values to stack and popped three', function () {
      stack.push(1);
      stack.push(2);
      assert.equal(stack.pop(), 2);
      assert.equal(stack.pop(), 1);
      assert.equal(stack.pop(), undefined);
    });
  });

  describe('Test pop() method for two stack instances', function () {
    let stackOne = new Stack();
    let stackTwo = new Stack();

    it('It should return in correct number of items for both instances of stack', function () {
      stackOne.push(1);
      stackOne.push(2);
      stackOne.push(3);

      stackTwo.push(4);
      stackTwo.push(5);
      stackTwo.push(6);

      assert.equal(stackOne.pop(), 3);
      assert.equal(stackTwo.pop(), 6);
      assert.equal(stackTwo.pop(), 5);
      assert.equal(stackTwo.itemsCount(), 1);
      assert.equal(stackOne.itemsCount(), 2);
    });
  });

  describe('Test isEmpty() method', function () {
    let stack = new Stack();

    it('It should return true for newly created stack', function () {
      assert.equal(stack.isEmpty(), true);
    });

    it('It should return false for stack containing one element', function () {
      stack.push(1);
      assert.equal(stack.isEmpty(), false);
      stack.pop();
      assert.equal(stack.isEmpty(), true);
    });
  });

  describe('Test reverse() method', function () {
    let stack = new Stack();

    it('It should return in correct number of items for both instances of stack', function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      stack.push(6);

      let reversed = stack.reverse();

      assert.equal(reversed.itemsCount(), 6);
      assert.equal(reversed.pop(), 1);
      assert.equal(reversed.pop(), 2);
      assert.equal(reversed.pop(), 3);
      assert.equal(reversed.pop(), 4);
      assert.equal(reversed.pop(), 5);
      assert.equal(reversed.pop(), 6);
    });
  });
});
