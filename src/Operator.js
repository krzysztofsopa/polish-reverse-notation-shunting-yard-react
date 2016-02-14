import Token from './Token';

class Operator extends Token {
  constructor(value) {
    super(value);
    this.operators = new Map();
    this.operators.set('+', 0);
    this.operators.set('-', 0);
    this.operators.set('*', 1);
    this.operators.set('/', 1);
    this.operators.set('(', 2);
    this.operators.set(')', 2);
    this.operators.set('^', 3);
  }

  isRightAssociative() {
    return '^' == this.value;
  }

  isLeftAssociative() {
    return '*' == this.value || '/' == this.value || '+' == this.value || '-' == this.value;
  }

  isLessThan(operatorToCompare) {
    if (operatorToCompare.isLeftParenthesis()) {
      return false;
    }

    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) < 0;
  }

  isLessOrEqualThan(operatorToCompare) {
    if (operatorToCompare.isLeftParenthesis()) {
      return false;
    }

    return this.operators.get(this.value) - this.operators.get(operatorToCompare.getValue()) <= 0;
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
}

module.exports = Operator;
