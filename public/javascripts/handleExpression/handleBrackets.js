export function handleBrackets() {
  var lastCharacter = self.view.numberInput.value.slice(-1);
  if (self.view.numberInput.value === "0" || self.view.numberInput.value === "") {
    self.view.numberInput.value = "";
    var bracket = "(";
  } else {
    var openBracketIndex = self.view.numberInput.value.lastIndexOf("(");
    var closeBracketIndex = self.view.numberInput.value.lastIndexOf(")");
    if ((closeBracketIndex > openBracketIndex || openBracketIndex === -1) && /[-+*/^√(]/.test(lastCharacter) === true) {
      var bracket = "(";
    } else if (/[-+*/^√(]/.test(lastCharacter) === true) {
      var bracket = "(";
    }
    else if ((closeBracketIndex > openBracketIndex || openBracketIndex === -1) && /[\d\)]/.test(lastCharacter) === true) {
      if (self.view.numberInput.value.match(/\(/g) !== null && (self.view.numberInput.value.match(/\(/g).length > self.view.numberInput.value.match(/\)/g).length)) {
      var bracket = ")";
    } else {
      return;
    }
  } else if ((openBracketIndex > closeBracketIndex || (openBracketIndex !== -1 && closeBracketIndex === -1)) && /\d/.test(lastCharacter) === true) {
    var bracket = ")";
  } else {
    return;
  }
}
self.printSign(bracket);
}
