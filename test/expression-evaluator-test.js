var assert = require('assert');
var Stack = require('../src/Stack');
var Number = require('../src/Number');
var Operator = require('../src/Operator');
var ShuntingYardAlgorithm = require('../src/ShuntingYardAlgorithm');
var ReversePolishNotationAlgorithm = require('../src/ReversePolishNotationAlgorithm');
var Tokenizer = require('../src/Tokenizer');

describe('ExpressionEvaluator', function() {

  describe('Test calculate() should calculate correct value from expression', function () {
    let expression = '3-1';

    it('It should return correct RPN representation', function () {
      let input = Tokenizer.evaluate(expression);
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 2);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let expression = '9*2*2-2-2-2';

    it('It should return correct RPN representation', function () {
      let input = Tokenizer.evaluate(expression);
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 30);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let expression = '1000/2/2/50/5';

    it('It should return correct RPN representation', function () {
      let input = Tokenizer.evaluate(expression);
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 1);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let expression = '10^2^2';

    it('It should return correct RPN representation', function () {
      let input = Tokenizer.evaluate(expression);
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 10000);
    });
  });

  // 10*(2*(3-1))^2 = 160
  describe('Test calculate() should calculate correct value from expression', function () {
    let expression = '10*(2*(3-1))^2';

    it('It should return correct RPN representation', function () {
      let input = Tokenizer.evaluate(expression);
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 160);
    });
  });

  describe('Test calculate() should calculate correct value from expression', function () {
    let expression = '(((((3-1))^2-1)^3)-7)*5^2';

    it('It should return correct RPN representation', function () {
      let input = Tokenizer.evaluate(expression);
      let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
      let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
      assert.equal(value, 500);
    });


    describe('Test calculate() should calculate correct value from expression', function () {
      let expression = '(3-1)*2*(4-5)';

      it('It should return correct RPN representation', function () {
        let input = Tokenizer.evaluate(expression);
        let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
        let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
        assert.equal(value, -4);
      });
    });


    describe('Test calculate() should calculate correct value from expression', function () {
      let expression = '(10-3)^5*(10-3)^5';

      it('It should return correct RPN representation', function () {
        let input = Tokenizer.evaluate(expression);
        let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
        let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
        assert.equal(value, 282475249);
      });
    });

    describe('Test calculate() should calculate correct value from expression', function () {
      let expression = '(10-3)^5*(10-3)^5';

      it('It should return correct RPN representation', function () {
        let input = Tokenizer.evaluate(expression);
        let output = ShuntingYardAlgorithm.infixToRpn(input.reverse());
        let value = ReversePolishNotationAlgorithm.calculate(output.reverse());
        assert.equal(value, 282475249);
      });
    });
    
  });
});
