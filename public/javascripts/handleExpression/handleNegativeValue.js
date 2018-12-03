export function handleNegativeValue() {
  if (/^-\d+$/.test(self.view.numberInput.value) === true || /^-\d+?\.?\d+$/.test(self.view.numberInput.value) === true) {
    self.view.numberInput.value = self.view.numberInput.value.substr(1, self.view.numberInput.value.length);
    self.turnToNegative = 0;
  } else if (self.turnToNegative === 0 && self.numberLength > 0) {
    var unchanged = self.view.numberInput.value.length - self.numberLength;
    self.view.numberInput.value = self.view.numberInput.value.substr(0, unchanged) + "(-" + self.view.numberInput.value.substr(unchanged, self.numberLength);
    self.turnToNegative = 1;
  } else if (self.turnToNegative === 1 && /[(](-)/.test(self.view.numberInput.value) === true) {
    var changed = self.view.numberInput.value.length - self.numberLength;
    self.view.numberInput.value = self.view.numberInput.value.substr(0, (changed - 2)) + self.view.numberInput.value.substr(changed, (self.numberLength + 2));
    self.turnToNegative = 0;
  }
  else if (/[-+*^]/.test(self.view.numberInput.value.slice(-1)) === true){
    self.printSign("(");
    self.printSign("-");
    self.turnToNegative = 1;
  }
}
