var assert = require('assert');
var Tokenizer = require('../src/Tokenizer');

describe('Tokenizer', function() {
  describe('Test evaluate() method', function () {

    it('It should return a list of Token object', function () {
      let input = '(3-1)*4';
      let output = Tokenizer.evaluate(input).reverse();

      assert.equal(output.pop().getValue(), '(');
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), 1);
      assert.equal(output.pop().getValue(), ')');
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 4);
    });


    it('It should return a list of Token object', function () {
      let input = '(3-1)*4+(4+2)^2*((5-3)^3)^5';
      let output = Tokenizer.evaluate(input).reverse();

      assert.equal(output.pop().getValue(), '(');
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), 1);
      assert.equal(output.pop().getValue(), ')');
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), 4);
      assert.equal(output.pop().getValue(), '+');
      assert.equal(output.pop().getValue(), '(');
      assert.equal(output.pop().getValue(), 4);
      assert.equal(output.pop().getValue(), '+');
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), ')');
      assert.equal(output.pop().getValue(), '^');
      assert.equal(output.pop().getValue(), 2);
      assert.equal(output.pop().getValue(), '*');
      assert.equal(output.pop().getValue(), '(');
      assert.equal(output.pop().getValue(), '(');
      assert.equal(output.pop().getValue(), 5);
      assert.equal(output.pop().getValue(), '-');
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), ')');
      assert.equal(output.pop().getValue(), '^');
      assert.equal(output.pop().getValue(), 3);
      assert.equal(output.pop().getValue(), ')');
      assert.equal(output.pop().getValue(), '^');
      assert.equal(output.pop().getValue(), 5);
    });

  });
});
