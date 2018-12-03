export function chooseNumber() {
  var lastCharacter = self.view.numberInput.value.slice(-1);
  if(self.view.numberInput.value === "Cannot be counted"){
    self.makeInputEmpty();
  }
  var chosenNumber = this.innerHTML;
  if (self.numberLength == 1 && self.isDigit.test(chosenNumber.charCodeAt(0)) === true && self.view.numberInput.value !== "0" && lastCharacter == 0){
    return;
  }
  if (chosenNumber === "C") {
    self.makeInputEmpty();
  } else if (chosenNumber === self.backspace) {
    self.handleBackspace();
  } else if (chosenNumber === "( )") {
    self.handleBrackets();
  } else if (chosenNumber === "+ / -") {
    self.handleNegativeValue();
  } else if (self.isDigit.test(chosenNumber.charCodeAt(0))) {
    self.printNumber(chosenNumber);
  }
  else if (chosenNumber.charCodeAt(0) === 46){
    self.handleDot();
  }
  else if (self.isSign.test(chosenNumber.charCodeAt(0)) && chosenNumber.charCodeAt(0) !== 8730) {
    self.printSign(chosenNumber);
  } else if (chosenNumber.charCodeAt(0) === 61) {
    self.makeCount();
  } else if (chosenNumber === "X<sup>d</sup>") {
    self.exponentBehavior("^");
  } else if (chosenNumber === "√&nbsp;x&nbsp;") {
    self.squareRootBehavior("√");
  }
  else {
    console.log('other option');
  }
}
