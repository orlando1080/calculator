function Calculator() {
  this.add = function () {
    return this.num1 + this.num2;
  };
  this.subtract = function () {
    return this.num1 - this.num2;
  };
  this.multiply = function () {
    return this.num1 * this.num2;
  };
  this.divide = function () {
    return this.num1 / this.num2;
  };
  this.operate = function (num1, op, num2) {
    this.num1 = num1;
    this.op = op;
    this.num2 = num2;
    switch (op) {
      case '+':
        return this.add();
      case '-':
        return this.subtract();lo
      case '*':
        return this.multiply();
      case '/':
        return this.divide();
    }
  };
  this.displayButtons = function () {
    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.getElementById("display").textContent += btn.textContent;
      });
    });
  }
}

const cal = new Calculator();

console.log(cal.operate(10, '*', 2));
cal.displayButtons();