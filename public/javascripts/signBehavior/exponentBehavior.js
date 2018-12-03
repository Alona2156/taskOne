export function exponentBehavior(key) {
  if (/\d|\)/.test(this.view.numberInput.value.slice(-1)) === true) {
    this.printSign(key);
    this.exponent = 1;
  }
}
