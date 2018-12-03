export function expressionBetweenBrackets(sign, indexFrom, position) {
  var signIndex = self.view.numberInput.value.indexOf(sign, indexFrom);
  var matchBrackets = 1;
  var closingBracketIndex = 0;
  var openingBracketIndex = 0;
  if (position === "after") {
    var inputLength = self.view.numberInput.value.length;
    for (var i = signIndex + 2; i < inputLength; i++) {
      if (matchBrackets !== 0) {
        if (self.view.numberInput.value[i] === "(") {
          matchBrackets++;
        } else if (self.view.numberInput.value[i] === ")") {
          matchBrackets--;
        }
        closingBracketIndex = i;
      } else if (matchBrackets === 0) {
        break;
      }
    }
    return {
      signIndex: signIndex,
      closingBracketIndex: closingBracketIndex
    };
  }
  if (position === "before"){
    for (var i = signIndex - 2; i > -1; i--) {
      if (matchBrackets !== 0) {
        if (self.view.numberInput.value[i] === ")") {
          matchBrackets++;
        } else if (self.view.numberInput.value[i] === "(") {
          matchBrackets--;
        }
        openingBracketIndex = i;
      } else if (matchBrackets === 0) {
        break;
      }
    }
    return {
      signIndex: signIndex,
      openingBracketIndex: openingBracketIndex
    };
  }
}
