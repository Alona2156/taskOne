export function handleDot(){
  if (/\d/.test(self.view.numberInput.value.slice(-1)) === true){
    var currentNumber = self.view.numberInput.value.slice(-self.numberLength);
    if (/\./.test(currentNumber) === true){
      return;
    }
    self.printSign(".");
  }
  else {
    return;
  }
}
