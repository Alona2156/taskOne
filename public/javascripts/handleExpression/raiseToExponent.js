export function raiseToExponent() {
  var findAllExpressions = /(\d+(\.\d*)?)\^(\d+(\.\d*)?)/g;
  var allExpressions = self.view.numberInput.value.match(findAllExpressions);
  if (allExpressions !== null) {
    self.countExponent(allExpressions);
  }
  var bracketBefore = /(\d+(\.\d*)?)\)\^(\d+(\.\d*)?)/g;
  var allBracketsBefore = self.view.numberInput.value.match(bracketBefore);
  if (allBracketsBefore !== null){
    var totalNumber = allBracketsBefore.length;
    self.countExponentBrackets(bracketBefore, totalNumber, "second");
  }
  var bracketAfter = /(\d+(\.\d*)?)\^\((\d+(\.\d*)?)/g;
  var allBracketsAfter = self.view.numberInput.value.match(bracketAfter);
  if (allBracketsAfter !== null){
    var totalNumber = allBracketsAfter.length;
    self.countExponentBrackets(bracketAfter, totalNumber, "first");
  }
}
