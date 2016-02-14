import Stack from './Stack';
import Operator from './Operator';
import Number from './Number';

let ShuntingYardAlgorithm = (function () {
  let handleOperator = function (operator, operatorStack, output) {
    if (operatorStack.isEmpty()) {
      operatorStack.push(operator);
      return;
    }

    if (operator.isRightParenthesis()) {
      popAllOperatorsUntilLeftParenthesis(operatorStack, output);
      removeLeftParenthesis(operatorStack);
      return;
    }

    if (shouldSwap(operator, operatorStack)) {
      output.push(operatorStack.pop());
      operatorStack.push(operator);
      return;
    } else {
      operatorStack.push(operator);
      return;
    }
  }

  let shouldSwap = function (operator, operatorStack) {
    return operator.isRightAssociative() && operator.isLessThan(operatorStack.top()) ||
        operator.isLeftAssociative() && operator.isLessOrEqualThan(operatorStack.top());
  }

  let popAllOperatorsUntilLeftParenthesis = function (operatorStack, output) {
    while (!operatorStack.top().isLeftParenthesis()) {
      output.push(operatorStack.pop());
    }
  }

  let removeLeftParenthesis = function (operatorStack) {
    operatorStack.pop();
  }

  return new class {
    infixToRpn(input) {
      let operatorStack = new Stack();
      let output = new Stack();

      while (!input.isEmpty()) {
        var token = input.pop();

        if (token instanceof Number) {
          output.push(token); continue;
        }

        if (token instanceof Operator) {
          handleOperator(token, operatorStack, output);
        }
      }

      while (!operatorStack.isEmpty()) {
        output.push(operatorStack.pop());
      }

      return output;
    }
  }
});

module.exports = new ShuntingYardAlgorithm();
