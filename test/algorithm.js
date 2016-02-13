var assert = require('assert');
var Stack = require('../src/Stack');
var ShuntingYardAlgorithm = require('../src/ShuntingYardAlgorithm');

describe('ShuntingYardAlgorithm', function() {
  
  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(3);
    input.push('-');
    input.push(2);

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      assert.equal(output.itemsCount(), 3);
      assert.equal(output.pop(), '-');
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), 3);
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(3);
    input.push('-');
    input.push(2);
    input.push('*');
    input.push(5);

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      assert.equal(output.itemsCount(), 5);
      assert.equal(output.pop(), '-');
      assert.equal(output.pop(), '*');
      assert.equal(output.pop(), 5);
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), 3);
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(3);
    input.push('-');
    input.push(2);
    input.push('*');
    input.push(5);
    input.push('*');
    input.push(6);
    input.push('/');
    input.push(7);

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      assert.equal(output.itemsCount(), 9);
      assert.equal(output.pop(), '-');
      assert.equal(output.pop(), '/');
      assert.equal(output.pop(), 7);
      assert.equal(output.pop(), '*');
      assert.equal(output.pop(), 6);
      assert.equal(output.pop(), '*');
      assert.equal(output.pop(), 5);
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), 3);
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(3);
    input.push('+');
    input.push(4);
    input.push('*');
    input.push(2);
    input.push('/');
    input.push('(');
    input.push(1);
    input.push('-');
    input.push(5);
    input.push(')');
    input.push('^');
    input.push(2);
    input.push('^');
    input.push(3);

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse()).reverse();
      assert.equal(output.itemsCount(), 13);
      assert.equal(output.pop(), 3);
      assert.equal(output.pop(), 4);
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), '*');
      assert.equal(output.pop(), 1);
      assert.equal(output.pop(), 5);
      assert.equal(output.pop(), '-');
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), 3);
      assert.equal(output.pop(), '^');
      assert.equal(output.pop(), '^');
      assert.equal(output.pop(), '/');
      assert.equal(output.pop(), '+');
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(3);
    input.push('*');
    input.push(2);
    input.push('-');
    input.push(1);

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse()).reverse();
      assert.equal(output.itemsCount(), 5);
      assert.equal(output.pop(), 3);
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), '*');
      assert.equal(output.pop(), 1);
      assert.equal(output.pop(), '-');
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(1);
    input.push('*');
    input.push('(');
    input.push(2);
    input.push('*');
    input.push('(');
    input.push(3);
    input.push('-');
    input.push(1);
    input.push(')');
    input.push(')');
    input.push('^');
    input.push(5);

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse()).reverse();
      assert.equal(output.pop(), 1);
      assert.equal(output.pop(), 2);
      assert.equal(output.pop(), 3);
      assert.equal(output.pop(), 1);
      assert.equal(output.pop(), '-');
      assert.equal(output.pop(), '*');
      assert.equal(output.pop(), 5);
      assert.equal(output.pop(), '^');
      assert.equal(output.pop(), '*');
    });
  });
});
