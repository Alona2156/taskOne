export function squareRootBehavior(key) {
  if (/[-+*/]/.test(self.view.numberInput.value.slice(-1)) === true) {
    self.printSign(key);
  } else if (self.view.numberInput.value === "0") {
    self.view.numberInput.value = "";
    self.printSign(key);
  } else if (self.numberLength !== "0" && self.view.numberInput.value.slice(-1) !== ")") {
    var indexToInsertSquareRoot = self.view.numberInput.value.length - self.numberLength;
    if (self.view.numberInput.value[indexToInsertSquareRoot - 1] !== "√") {
      var newInput = self.view.numberInput.value.slice(0, indexToInsertSquareRoot) + "√" + self.view.numberInput.value.slice(indexToInsertSquareRoot);
      self.view.numberInput.value = newInput;
    }
  }
}
