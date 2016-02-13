var assert = require('assert');
var Operator = require('../src/Operator');

describe('Operator', function() {
  describe('Test methods', function () {

    it('It should return correct boolean for +, -, /, *, ^ operators associativness', function () {
      assert.equal((new Operator('+')).isLeftAssociative(), true);
      assert.equal((new Operator('+')).isRightAssociative(), false);
      assert.equal((new Operator('-')).isLeftAssociative(), true);
      assert.equal((new Operator('-')).isRightAssociative(), false);
      assert.equal((new Operator('*')).isLeftAssociative(), true);
      assert.equal((new Operator('*')).isRightAssociative(), false);
      assert.equal((new Operator('/')).isLeftAssociative(), true);
      assert.equal((new Operator('/')).isRightAssociative(), false);
      assert.equal((new Operator('^')).isLeftAssociative(), false);
      assert.equal((new Operator('^')).isRightAssociative(), true);
    });

    it('It isLessThan() method correct', function () {
      assert.equal((new Operator('+')).isLessThan(new Operator('*')), true);
      assert.equal((new Operator('+')).isLessThan(new Operator('/')), true);
      assert.equal((new Operator('-')).isLessThan(new Operator('*')), true);
      assert.equal((new Operator('-')).isLessThan(new Operator('/')), true);
      assert.equal((new Operator('+')).isLessThan(new Operator('^')), true);
      assert.equal((new Operator('-')).isLessThan(new Operator('^')), true);
      assert.equal((new Operator('*')).isLessThan(new Operator('^')), true);
      assert.equal((new Operator('/')).isLessThan(new Operator('^')), true);

      assert.equal((new Operator('*')).isLessThan(new Operator('+')), false);
      assert.equal((new Operator('/')).isLessThan(new Operator('+')), false);
      assert.equal((new Operator('*')).isLessThan(new Operator('-')), false);
      assert.equal((new Operator('/')).isLessThan(new Operator('-')), false);
      assert.equal((new Operator('^')).isLessThan(new Operator('+')), false);
      assert.equal((new Operator('^')).isLessThan(new Operator('-')), false);
      assert.equal((new Operator('^')).isLessThan(new Operator('*')), false);
      assert.equal((new Operator('^')).isLessThan(new Operator('/')), false);

      assert.equal((new Operator('+')).isLessThan(new Operator('+')), false);
      assert.equal((new Operator('-')).isLessThan(new Operator('-')), false);
      assert.equal((new Operator('/')).isLessThan(new Operator('/')), false);
      assert.equal((new Operator('^')).isLessThan(new Operator('^')), false);
    });


    it('It isLessThanOrEqual() method correct', function () {
      assert.equal((new Operator('+')).isLessOrEqualThan(new Operator('*')), true);
      assert.equal((new Operator('+')).isLessOrEqualThan(new Operator('/')), true);
      assert.equal((new Operator('-')).isLessOrEqualThan(new Operator('*')), true);
      assert.equal((new Operator('-')).isLessOrEqualThan(new Operator('/')), true);
      assert.equal((new Operator('+')).isLessOrEqualThan(new Operator('^')), true);
      assert.equal((new Operator('-')).isLessOrEqualThan(new Operator('^')), true);
      assert.equal((new Operator('*')).isLessOrEqualThan(new Operator('^')), true);
      assert.equal((new Operator('/')).isLessOrEqualThan(new Operator('^')), true);

      assert.equal((new Operator('*')).isLessOrEqualThan(new Operator('+')), false);
      assert.equal((new Operator('/')).isLessOrEqualThan(new Operator('+')), false);
      assert.equal((new Operator('*')).isLessOrEqualThan(new Operator('-')), false);
      assert.equal((new Operator('/')).isLessOrEqualThan(new Operator('-')), false);
      assert.equal((new Operator('^')).isLessOrEqualThan(new Operator('+')), false);
      assert.equal((new Operator('^')).isLessOrEqualThan(new Operator('-')), false);
      assert.equal((new Operator('^')).isLessOrEqualThan(new Operator('*')), false);
      assert.equal((new Operator('^')).isLessOrEqualThan(new Operator('/')), false);

      assert.equal((new Operator('+')).isLessOrEqualThan(new Operator('+')), true);
      assert.equal((new Operator('-')).isLessOrEqualThan(new Operator('-')), true);
      assert.equal((new Operator('/')).isLessOrEqualThan(new Operator('/')), true);
      assert.equal((new Operator('^')).isLessOrEqualThan(new Operator('^')), true);
    });

    it('It isValidOperatorToken() method correct', function () {
      assert.equal(Operator.isValidOperatorToken('+'), true);
      assert.equal(Operator.isValidOperatorToken('-'), true);
      assert.equal(Operator.isValidOperatorToken('*'), true);
      assert.equal(Operator.isValidOperatorToken('/'), true);
      assert.equal(Operator.isValidOperatorToken('^'), true);
      assert.equal(Operator.isValidOperatorToken('('), true);
      assert.equal(Operator.isValidOperatorToken(')'), true);
      assert.equal(Operator.isValidOperatorToken('+-'), false);
      assert.equal(Operator.isValidOperatorToken(10), false);
    });
  });
});
