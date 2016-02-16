import Stack from './stack';
import Number from '../models/number';
import Operator from '../models/operator';

class Tokenizer {
  evaluate (expression) {
    let stack = new Stack();

    var tokens = expression.match(/[)(]|[^\d()]+|[\d.]+/g);
    tokens.forEach(function(token) {
      if (Operator.isValidOperatorToken(token)) {
        stack.push(new Operator(token));
      }

      if (!Operator.isValidOperatorToken(token)) {
        stack.push(new Number(token));
      }
    });

    return stack;
  }
}

module.exports = new Tokenizer();
