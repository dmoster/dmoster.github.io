let calculator = {
  val1: null,
  val2: null,

  read() {
    this.val1 = Number(prompt(`Enter a value:`));
    this.val2 = Number(prompt(`Enter one more value:`));
  },

  sum() {
    return `The sum of ${this.val1} and ${this.val2} is ${parseInt(this.val1 + this.val2)}`;
  },

  mul() {
    return `The product of ${this.val1} and ${this.val2} is ${this.val1 * this.val2}`;
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());