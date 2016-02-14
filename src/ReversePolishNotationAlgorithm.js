import Stack from './Stack';
import Operator from './Operator';
import Number from './Number';

class ReversePolishNotationAlgorithm {
  calculate(input) {
    let stack = new Stack();

    while (!input.isEmpty()) {

      let token = input.pop();
      if (token instanceof Number) {
        stack.push(token);
        continue;
      }

      if (token instanceof Operator) {
        let one = stack.pop();
        let two = stack.pop();

        stack.push(token.evaluate(two, one));
        continue;
      }
    }

    return stack.pop().getValue();
  }
}

module.exports = new ReversePolishNotationAlgorithm();
