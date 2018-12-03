export function printSign(chosenNumber) {
  var lastCharacter = self.view.numberInput.value.slice(-1);
  if ((/[(]/.test(lastCharacter) === true && /[+*/]/.test(chosenNumber) === true) || (/[-+*/]/.test(lastCharacter) === true && /[-+*/]/.test(chosenNumber) === true)) {
    return;
  }
  else if(chosenNumber === "."){
    self.view.counted = 0;
    self.view.numberInput.value += chosenNumber;
    self.numberLength ++;
  }
  else if (chosenNumber === "-" && (/[\^]/.test(lastCharacter)) === true){
    self.handleNegativeValue();
  }
  else {
    self.view.counted = 0;
    self.view.numberInput.value += chosenNumber;
    self.numberLength = 0;
    self.turnToNegative = 0;
  }
}
