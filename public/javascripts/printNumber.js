export function printNumber(chosenNumber) {
  if (self.view.numberInput.value === "0" || self.view.counted === 1) {
    self.view.numberInput.value = parseFloat(chosenNumber);
    self.view.counted = 0;
    self.numberLength = 1;
  } else if (self.numberLength < 15) {
    self.view.numberInput.value += parseFloat(chosenNumber);
    self.numberLength++;
  } else {
    return;
  }
}
