import Stack from './Stack';
import Number from './Number';
import Operator from './Operator';

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
