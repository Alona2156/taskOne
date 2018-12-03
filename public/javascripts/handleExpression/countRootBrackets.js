export function countRootBrackets(bracket){
  var numberOfRoots = self.view.numberInput.value.match(bracket).length;
  var indexFrom = 0;
  var rootsToCount = [];
  for (var i = 0; i < numberOfRoots; i++){
    var expression = self.expressionBetweenBrackets("√", indexFrom, "after");
    var numberForSquareRoot = eval(self.view.numberInput.value.slice(expression.signIndex + 2, expression.closingBracketIndex));
    var expressionToReplace = self.view.numberInput.value.slice(expression.signIndex, expression.closingBracketIndex + 1);
    rootsToCount.push({numberForSquareRoot: numberForSquareRoot, expressionToReplace: expressionToReplace});
    indexFrom = expression.closingBracketIndex;
  }
  rootsToCount.forEach(function(arr){
    var newInputValue = self.view.numberInput.value.replace(arr.expressionToReplace, Math.sqrt(arr.numberForSquareRoot));
    self.view.numberInput.value = newInputValue;
  });
}
