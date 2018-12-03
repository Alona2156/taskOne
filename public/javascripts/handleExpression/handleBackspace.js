export function handleBackspace() {
  var lastCharacter = self.view.numberInput.value.slice(-1);
  if (/\d/.test(lastCharacter) === true) {
    self.numberLength--;
  }
  else if (/(\D{2,})$/.test(self.view.numberInput.value) === true){
    self.numberLength = 0;
  }
  else if (/([^\D])(\D)$/.test(self.view.numberInput.value) === true){
    var expression = /(\d+)(\D)$/;
    self.numberLength = expression.exec(self.view.numberInput.value)[1].length;
  }
  self.view.numberInput.value = self.view.numberInput.value.slice(0, -1);
}
