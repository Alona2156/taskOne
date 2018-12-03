export function backspaceKeyBehavior(ev) {
  if (ev.keyCode === 8) {
      ev.preventDefault();
      self.handleBackspace();
  } else {
    return;
  }
}
