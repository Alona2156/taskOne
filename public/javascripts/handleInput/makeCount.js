export function makeCount() {
  var lastCharacter = (self.view.numberInput.value.slice(-1)).charCodeAt(0);
  if (/[-+*/^√]/.test(lastCharacter) === true) {
    return;
  }
  self.closeBrackets();
  if (self.exponent === 1) {
    self.raiseToExponent();
  }
  if (/√/.test(self.view.numberInput.value) === true) {
    self.handleSquareRoot();
  }
  self.view.numberInput.value = eval(self.view.numberInput.value);
  if (self.view.numberInput.value.indexOf(NaN) !== -1 || self.view.numberInput.value.indexOf("Infinity") !== -1) {
    self.view.numberInput.value = "Cannot be counted";
  }
  self.view.counted = 1;
  self.numberLength = self.view.numberInput.value.length;
  if (self.view.numberInput.value[0] === "-") {
    self.turnToNegative = 1;
    self.numberLength = self.view.numberInput.value.length - 1;
  } else {
    self.turnToNegative = 0;
  }
}
