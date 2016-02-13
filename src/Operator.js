class Operator {
  constructor(token) {
    this.token = token;
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
    return '^' == this.token;
  }

  isLeftAssociative() {
    return '*' == this.token || '/' == this.token || '+' == this.token || '-' == this.token;
  }

  isLessThan(operatorToCompare) {
    if (operatorToCompare.getToken() == '(') {
      return false;
    }

    return this.operators.get(this.token) - this.operators.get(operatorToCompare.getToken()) < 0;
  }

  isLessOrEqualThan(operatorToCompare) {
    if (operatorToCompare.getToken() == '(') {
      return false;
    }

    return this.operators.get(this.token) - this.operators.get(operatorToCompare.getToken()) <= 0;
  }

  isLeftParenthesis() {
    return this.token == '(';
  }

  isRightParenthesis() {
    return this.token == ')';
  }
  
  getToken() {
    return this.token;
  }

  static isValidOperatorToken(token) {
    return '*' == token || '/' == token || '+' == token || '-' == token || '(' == token || ')' == token || '^' == token;
  }
}

module.exports = Operator;
