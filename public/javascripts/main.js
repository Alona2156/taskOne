import {printToInput,
  chooseNumber,
  makeInputEmpty,
  printNumber,
  printSign,
  makeCount,
  backspaceKeyBehavior,
  handleBrackets,
  handleNegativeValue,
  raiseToExponent,
  handleSquareRoot,
  handleBackspace,
  expressionBetweenBrackets,
  exponentBehavior,
  squareRootBehavior,
  closeBrackets,
  handleDot,
  countExponent,
  countExponentBrackets,
  countRootExpression,
  countRootBrackets
} from './exportAllModules.js';

class View {
  initDOM() {
    this.numbers = document.getElementsByTagName("td");
    this.numberInput = document.getElementById("numberInput");
    this.numberInput.value = 0;
    this.counted = 0;
  }
  attachHandlers() {
    this.numberInput.addEventListener("keypress", self.printToInput.bind(self));
    this.numberInput.addEventListener("keydown", self.backspaceKeyBehavior.bind(self));
    for (var i = 0; i < this.numbers.length; i++) {
      this.numbers[i].addEventListener("click", self.chooseNumber);
    }
  }
}

class Controller {
  constructor(myView) {
    this.view = myView;
    this.isSign = /^4[0-35-7]$|^8730$/;
    this.isDigit = /^4[89]$|^5[0-7]$/;
    this.backspace = "&lt;=";
    this.numberLength = 1;
    this.turnToNegative = 0;
    this.exponent = 0;
    self = this;
  }
  init() {
    this.view.initDOM();
    this.view.attachHandlers();
  }
  printToInput(ev) {
    return printToInput.call(this, ev);
  }
  chooseNumber() {
    return chooseNumber.call(this);
  }
  makeInputEmpty() {
    return makeInputEmpty.call();
  }
  printNumber(chosenNumber){
   return printNumber.call(this, chosenNumber);
  }
  printSign(chosenNumber){
    return printSign.call(this, chosenNumber);
  }
  makeCount(){
    return makeCount.call();
  }
  backspaceKeyBehavior(ev){
    return backspaceKeyBehavior.call(this, ev);
  }
  handleBrackets(){
    return handleBrackets.call();
  }
  handleNegativeValue(){
    return handleNegativeValue.call();
  }
  raiseToExponent(){
    return raiseToExponent.call();
  }
  handleSquareRoot(){
    return handleSquareRoot.call(this);
  }
  handleBackspace(){
    return handleBackspace.call();
  }
  expressionBetweenBrackets(sign, indexFrom, position){
    return expressionBetweenBrackets.call(this, sign, indexFrom, position);
  }
  exponentBehavior(key){
    return exponentBehavior.call(this, key);
  }
  squareRootBehavior(key){
    return squareRootBehavior.call(this, key);
  }
  closeBrackets(){
    return closeBrackets.call();
  }
  handleDot(){
    return handleDot.call();
  }
  countExponent(expressions){
    return countExponent.call(this, expressions);
  }
  countExponentBrackets(regexp, numberOfRegexp, numberToFind){
    return countExponentBrackets.call(this, regexp, numberOfRegexp, numberToFind);
  }
  countRootExpression(regexp){
    return countRootExpression.call(this, regexp);
  }
  countRootBrackets(bracket){
    return countRootBrackets.call(this, bracket);
  }
}

const myView = new View();
const myController = new Controller(myView);

myController.init();
