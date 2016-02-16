import Stack from '../utils/stack';
import Operator from '../models/operator';
import Number from '../models/number';

class ReversePolishNotation {
  calculate(input) {
    let stack = new Stack();

    while (!input.isEmpty()) {
      let token = input.pop();
      if (token instanceof Number) {
        stack.push(token);
        continue;
      }

      if (token instanceof Operator) {
        stack.push(token.evaluate(stack.pop(), stack.pop()));

        continue;
      }
    }

    return stack.pop().getValue();
  }
}

module.exports = new ReversePolishNotation();
