export function countRootExpression(regexp){
  var numberOfRoots = self.view.numberInput.value.match(regexp).length;
  var rootExpression = self.view.numberInput.value.match(regexp);
  for (var i = 0; i < numberOfRoots; i++) {
    var numberForSquareRoot = rootExpression[i].slice(1);
    var expressionToReplace = rootExpression[i];
    var newInputValue = self.view.numberInput.value.replace(expressionToReplace, Math.sqrt(numberForSquareRoot));
    self.view.numberInput.value = newInputValue;
  }
}
