import Stack from '../utils/stack';
import Operator from '../models/operator';
import Number from '../models/number';

let ShuntingYard = (function () {
  let handleOperator = function (operator, operatorStack, output) {
    if (operator.isLeftParenthesis()) {
      operatorStack.push(operator);

      return;
    }

    if (operator.isRightParenthesis()) {
      popAllOperatorsUntilLeftParenthesis(operatorStack, output);
      removeLeftParenthesis(operatorStack);

      return;
    }

    if (operatorStack.isEmpty()) {
      operatorStack.push(operator);

      return;
    }

    if (!operatorStack.isEmpty() && operatorStack.top().isLeftParenthesis()) {
      operatorStack.push(operator);

      return;
    }


    if (!operatorStack.isEmpty() && operator.isLeftAssociative() && operator.isEqualTo(operatorStack.top())) {
      output.push(operatorStack.pop());
      operatorStack.push(operator);

      return;
    }

    if (!operatorStack.isEmpty() && operator.isLeftAssociative() && operator.isGreaterThan(operatorStack.top())) {
      operatorStack.push(operator);

      return;
    }

    var finished = false;
    while (
      !operatorStack.isEmpty() &&
      operator.isLeftAssociative() &&
      operator.isLessOrEqualThan(operatorStack.top()) &&
      !operatorStack.top().isLeftParenthesis()
    ) {
      output.push(operatorStack.pop());
      finished = true;
    }
    if (finished) {
      operatorStack.push(operator);
      finished = false;
    }

    if (operator.isRightAssociative()) {
      operatorStack.push(operator);
    }
  }

  let popAllOperatorsUntilLeftParenthesis = function (operatorStack, output) {
    while (!operatorStack.isEmpty() && !operatorStack.top().isLeftParenthesis()) {
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

module.exports = new ShuntingYard();
