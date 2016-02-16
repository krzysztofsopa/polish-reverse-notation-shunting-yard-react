var ShuntingYard = require('./algorithms/shunting-yard');
var ReversePolishNotation = require('./algorithms/reverse-polish-notation');
var Tokenizer = require('./utils/tokenizer');

class MathExpressionEvaluator {
  evaluate (expression) {
    return ReversePolishNotation.calculate(
      ShuntingYard.infixToRpn(
        Tokenizer.evaluate(expression).reverse()
      ).reverse()
    );
  }
}

module.exports = new MathExpressionEvaluator();
