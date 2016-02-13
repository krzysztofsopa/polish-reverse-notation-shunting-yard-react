import Stack from './Stack';
import Operator from './Operator';

class ShuntingYardAlgorithm {
  constructor() {}

  infixToRpn(input) {

    let operatorStack = new Stack();
    let output = new Stack();

    while (!input.isEmpty()) {
      var token = input.pop();

      if (Number.isSafeInteger(token)) {
        output.push(token); continue;
      }

      if (Operator.isValidOperatorToken(token)) {
        if (!operatorStack.isEmpty()) {
          var operator = new Operator(token);

          if (operator.isRightParenthesis()) {
            this.popAllOperatorsUntilLeftParenthesis(operatorStack, output);
            this.removeLeftParenthesis(operatorStack);
            continue;
          }

          if (this.shouldSwap(operator, operatorStack)) {
            output.push(operatorStack.pop());
            operatorStack.push(token);
            continue;
          } else {
            operatorStack.push(token);
            continue;
          }
        } else {
          operatorStack.push(token);
          continue;
        }
      }
    }

    while (!operatorStack.isEmpty()) {
      output.push(operatorStack.pop());
    }

    return output;
  }

  shouldSwap(operator, operatorStack) {
    return operator.isRightAssociative() && operator.isLessThan(new Operator(operatorStack.top())) ||
        operator.isLeftAssociative() && operator.isLessOrEqualThan(new Operator(operatorStack.top()));
  }

  popAllOperatorsUntilLeftParenthesis(operatorStack, output) {
    while (!new Operator(operatorStack.top()).isLeftParenthesis()) {
      output.push(operatorStack.pop());
    }
  }

  removeLeftParenthesis(operatorStack) {
    operatorStack.pop();
  }
};

module.exports = new ShuntingYardAlgorithm();
