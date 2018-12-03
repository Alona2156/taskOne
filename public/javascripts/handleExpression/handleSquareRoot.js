export function handleSquareRoot() {
  var intNumber = /√(\d+)/g;
  var floatNumber = /√(\d+\.\d+)/g;
  var bracket = /√(\()/g;
  if (floatNumber.test(self.view.numberInput.value) === true) {
    self.countRootExpression(floatNumber);
  }
  if (intNumber.test(self.view.numberInput.value) === true) {
    self.countRootExpression(intNumber);
  }
  if (bracket.test(self.view.numberInput.value) === true) {
    self.countRootBrackets(bracket);
  }
}
