export function countExponentBrackets(regexp, numberOfRegexp, numberToFind) {
  var allNumbersToFind = self.view.numberInput.value.match(regexp);
  var indexFrom = 0;
  var exponentsToCount = [];
  for (var i = 0; i < numberOfRegexp; i++) {
    var allNumbers = allNumbersToFind[i];
    if (numberToFind === "first") {
      var firstNumber = allNumbers.match(/(.*)\^/)[1];
      var expression = self.expressionBetweenBrackets("^", indexFrom, "after");
      var secondNumberBrackets = self.view.numberInput.value.slice(expression.signIndex + 1, expression.closingBracketIndex + 1);
      var secondNumber = eval(secondNumberBrackets);
      var expressionToReplace = firstNumber + "^" + secondNumberBrackets;
      indexFrom = expression.closingBracketIndex;
    }
    if (numberToFind === "second"){
      var secondNumber = allNumbers.match(/\^(.*)/)[1];
      var expression = self.expressionBetweenBrackets("^", indexFrom, "before");
      var firstNumberBrackets = self.view.numberInput.value.slice(expression.openingBracketIndex, expression.signIndex);
      var firstNumber = eval(firstNumberBrackets);
      var expressionToReplace = firstNumberBrackets + "^" + secondNumber;
      indexFrom = expression.signIndex + 1;
    }
    exponentsToCount.push({
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      expressionToReplace: expressionToReplace
    });
  }
  exponentsToCount.forEach(function(arr) {
    var raisedToExponent = Math.pow(arr.firstNumber, arr.secondNumber);
    var newInputValue = self.view.numberInput.value.replace(arr.expressionToReplace, raisedToExponent);
    self.view.numberInput.value = newInputValue;
  });
}
