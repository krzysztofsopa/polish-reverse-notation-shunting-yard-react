import Token from './token';
import Number from './number';

class Operator extends Token {
  constructor(value) {
    super(value);
    this.operators = new Map();
    this.operators.set('+', 0);
    this.operators.set('-', 0);
    this.operators.set('*', 1);
    this.operators.set('/', 1);
    this.operators.set('^', 2);
    this.operators.set('(', 3);
    this.operators.set(')', 3);
  }

  isRightAssociative() {
    return '^' == this.value;
  }

  isLeftAssociative() {
    return '*' == this.value || '/' == this.value || '+' == this.value || '-' == this.value;
  }

  isLessThan(operatorToCompare) {
    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) < 0;
  }

  isGreaterThan(operatorToCompare) {
    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) > 0;
  }

  isLessOrEqualThan(operatorToCompare) {
    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) <= 0;
  }

  isGreaterOrEqualTo(operatorToCompare) {
    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) >= 0;
  }

  isEqualTo(operatorToCompare) {
    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) == 0;
  }

  isLeftParenthesis() {
    return this.value == '(';
  }

  isRightParenthesis() {
    return this.value == ')';
  }

  static isValidOperatorToken(value) {
    return '*' == value || '/' == value || '+' == value || '-' == value || '(' == value || ')' == value || '^' == value;
  }

  evaluate(numberOne, numberTwo) {
    if (this.value == '*') {
      return new Number(numberTwo.getValue() * numberOne.getValue());
    }

    if (this.value == '/') {
      return new Number(numberTwo.getValue() / numberOne.getValue());
    }

    if (this.value == '-') {
      return new Number(numberTwo.getValue() - numberOne.getValue());
    }

    if (this.value == '+') {
      return new Number(parseFloat(numberTwo.getValue()) + parseFloat(numberOne.getValue()));
    }

    if (this.value == '^') {
      return new Number(Math.pow(numberTwo.getValue(), numberOne.getValue()));
    }
  }
}

module.exports = Operator;
