export function countExponent(expressions){
  var numberOfExponents = expressions.length;
  var expressionsToReplace = expressions;
  for (var i = 0; i < numberOfExponents; i++) {
    var expressionToReplace = expressionsToReplace[i];
    var firstNumber = expressionToReplace.match(/(.*)\^/)[1];
    var secondNumber = expressionToReplace.match(/\^(.*)/)[1];
    var raisedToExponent = Math.pow(firstNumber, secondNumber);
    var newInputValue = self.view.numberInput.value.replace(expressionToReplace, raisedToExponent);
    self.view.numberInput.value = newInputValue;
  }
}
