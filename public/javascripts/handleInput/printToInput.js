export function printToInput(ev){
  ev.preventDefault();
  var lastCharacter = self.view.numberInput.value.slice(-1);
  if(/[a-z]/i.test(lastCharacter) === true){
    self.makeInputEmpty();
  }
  if (self.numberLength == 1 && self.isDigit.test(ev.charCode) === true && self.view.numberInput.value !== "0" && lastCharacter == 0){
    return;
  }
  if (ev.keyCode === 13 || ev.charCode === 61) {
    this.makeCount();
  }
  else if (ev.charCode === 40 || ev.charCode === 41){
    self.handleBrackets();
  }
  else if (ev.charCode === 46){
    self.handleDot();
  }
  else if (this.isDigit.test(ev.charCode)){
    this.printNumber(ev.key);
  }
  else if (ev.charCode === 94){
    self.exponentBehavior(ev.key);
  }
  else if (ev.charCode === 8730){
    self.squareRootBehavior("√");
  }
  else if(this.isSign.test(ev.charCode) && this.view.numberInput.value.slice(-1) !== ev.key){
    this.printSign(ev.key);
  }
  else {
    return;
  }
}
