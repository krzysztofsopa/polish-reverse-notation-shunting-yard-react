var assert = require('assert');
var Stack = require('../src/Stack');
var Number = require('../src/Number');
var Operator = require('../src/Operator');
var ShuntingYardAlgorithm = require('../src/ShuntingYardAlgorithm');
var ReversePolishNotationAlgorithm = require('../src/ReversePolishNotationAlgorithm');

describe('ReversePolishNotationAlgorithm', function() {

  describe('Test calculate() should calculate correct value from expression', function () {
    let input = new Stack();
    input.push(new Number(3));
    input.push(new Operator('-'));
    input.push(new Number(2));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 1);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let input = new Stack();
    input.push(new Number(9));
    input.push(new Operator('*'));
    input.push(new Number(2));
    input.push(new Operator('*'));
    input.push(new Number(2));
    input.push(new Operator('-'));
    input.push(new Number(2));
    input.push(new Operator('-'));
    input.push(new Number(2));
    input.push(new Operator('-'));
    input.push(new Number(2));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 30);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let input = new Stack();
    input.push(new Number(1000));
    input.push(new Operator('/'));
    input.push(new Number(2));
    input.push(new Operator('/'));
    input.push(new Number(2));
    input.push(new Operator('/'));
    input.push(new Number(50));
    input.push(new Operator('/'));
    input.push(new Number(5));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 1);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let input = new Stack();
    input.push(new Number(10));
    input.push(new Operator('^'));
    input.push(new Number(2));
    input.push(new Operator('^'));
    input.push(new Number(2));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 10000);
    });
  });

  // 10*(2*(3-1))^2 = 160
  describe('Test calculate() should calculate correct value from expression', function () {
    let input = new Stack();
    input.push(new Number(10));
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
    input.push(new Number(2));

    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 160);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let input = new Stack();
    input.push(new Operator('('));
    input.push(new Operator('('));
    input.push(new Operator('('));
    input.push(new Operator('('));
    input.push(new Operator('('));
    input.push(new Number(3));
    input.push(new Operator('-'));
    input.push(new Number(1));
    input.push(new Operator(')'));
    input.push(new Operator(')'));
    input.push(new Operator('^'));
    input.push(new Number(2));
    input.push(new Operator('-'));
    input.push(new Number(1));
    input.push(new Operator(')'));
    input.push(new Operator('^'));
    input.push(new Number(3));
    input.push(new Operator(')'));
    input.push(new Operator('-'));
    input.push(new Number(7));
    input.push(new Operator(')'));
    input.push(new Operator('*'));
    input.push(new Number(5));
    input.push(new Operator('^'));
    input.push(new Number(2));


    it('It should return correct RPN representation', function () {
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 500);
    });
  });
});
