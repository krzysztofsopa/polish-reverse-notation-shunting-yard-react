var assert = require('assert');
var Stack = require('../src/Stack');
var Number = require('../src/Number');
var Operator = require('../src/Operator');
var ShuntingYardAlgorithm = require('../src/ShuntingYardAlgorithm');

describe('ShuntingYardAlgorithm', function() {

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(new Number(3));
    input.push(new Operator('-'));
    input.push(new Number(2));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      assert.equal(output.itemsCount(), 3);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), 3);
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(new Number(3));
    input.push(new Operator('-'));
    input.push(new Number(2));
    input.push(new Operator('*'));
    input.push(new Number(5));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      assert.equal(output.itemsCount(), 5);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 5);
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), 3);
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(new Number(3));
    input.push(new Operator('-'));
    input.push(new Number(2));
    input.push(new Operator('*'));
    input.push(new Number(5));
    input.push(new Operator('*'));
    input.push(new Number(6));
    input.push(new Operator('/'));
    input.push(new Number(7));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      assert.equal(output.itemsCount(), 9);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), '/');
      assert.equal(output.pop().getValue(), 7);
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 6);
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 5);
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), 3);
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(new Number(3));
    input.push(new Operator('+'));
    input.push(new Number(4));
    input.push(new Operator('*'));
    input.push(new Number(2));
    input.push(new Operator('/'));
    input.push(new Operator('('));
    input.push(new Number(1));
    input.push(new Operator('-'));
    input.push(new Number(5));
    input.push(new Operator(')'));
    input.push(new Operator('^'));
    input.push(new Number(2));
    input.push(new Operator('^'));
    input.push(new Number(3));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse()).reverse();
      assert.equal(output.itemsCount(), 13);
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), 4);
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 1);
      assert.equal(output.pop().getValue(), 5);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), '^');
      assert.equal(output.pop().getValue(), '^');
      assert.equal(output.pop().getValue(), '/');
      assert.equal(output.pop().getValue(), '+');
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(new Number(3));
    input.push(new Operator('*'));
    input.push(new Number(2));
    input.push(new Operator('-'));
    input.push(new Number(1));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse()).reverse();
      assert.equal(output.itemsCount(), 5);
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 1);
      assert.equal(output.pop().getValue(), '-');
    });
  });

  describe('Test infixToRpn() method', function () {
    let input = new Stack();
    input.push(new Number(1));
    input.push(new Operator('*'));
    input.push(new Operator('('));
    input.push(new Number(2));
    input.push(new Operator('*'));
    input.push(new Operator('('));
    input.push(new Number(3));
    input.push(new Operator('-'));
    input.push(new Number(1));
    input.push(new Operator(')'));
    input.push(new Operator(')'));
    input.push(new Operator('^'));
    input.push(new Number(5));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse()).reverse();
      assert.equal(output.pop().getValue(), 1);
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), 1);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 5);
      assert.equal(output.pop().getValue(), '^');
      assert.equal(output.pop().getValue(), '*');
    });
  });

});
