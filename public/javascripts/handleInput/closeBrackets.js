export function closeBrackets(){
  if (self.view.numberInput.value.match(/\(/g) !== null) {
    var numberOfOpenBrackets = self.view.numberInput.value.match(/\(/g).length;
    if (self.view.numberInput.value.match(/\)/g) !== null) {
      var numberOfCloseBrackets = self.view.numberInput.value.match(/\)/g).length;
    } else {
      var numberOfCloseBrackets = 0;
    }
    var BracketsToClose = numberOfOpenBrackets - numberOfCloseBrackets;
    for (var i = 0; i < BracketsToClose; i++) {
      self.printSign(")");
    }
  }
}
