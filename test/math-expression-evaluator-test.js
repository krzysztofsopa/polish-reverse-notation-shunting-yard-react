var assert = require('assert');
var MathExpressionEvaluator = require('../src/math-expression-evaluator');

describe('MathExpressionEvaluator', function() {

  describe('Test evaluate() method', function () {
    let expressionSolutions = new Map();
    expressionSolutions.set('3-1', 2);
    expressionSolutions.set('9*2*2-2-2-2', 30);
    expressionSolutions.set('1000/2/2/50/5', 1);
    expressionSolutions.set('10^2^2', 10000);
    expressionSolutions.set('10*(2*(3-1))^2', 160);
    expressionSolutions.set('(((((3-1))^2-1)^3)-7)*5^2', 500);
    expressionSolutions.set('(3-1)*2*(4-5)', -4);
    expressionSolutions.set('(10-3)^5*(10-3)^5', 282475249);
    expressionSolutions.set('3+4*2/(1-5)^2^3', 3.00012207031);
    expressionSolutions.set('7*8*9*(1+2)^3-1', 13607);
    expressionSolutions.set('7*8*9*(1+2)^3-(10+8)*(8-10)', 13644);
    expressionSolutions.set('(5*(6-4)^2)+((2+7)^2/7*(4+1))^2+2*((7-5)*(7+5))^2', 4519.44897959);

    it('It should return correct solution for all expressions', function () {
      for (var [expression, solution] of expressionSolutions) {
        assert.equal((MathExpressionEvaluator.evaluate(expression)).toFixed(5), (solution).toFixed(5));
      }
    });
  });
});
