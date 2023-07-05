const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let firstUserNumber = prompt('Enter your first number'),
    
	userOperator = prompt('Enter your operator'),
    
	secondUserNumber = prompt('Enter your second number');

const operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      return divide(firstNumber, secondNumber);
  }
};

alert(operate(firstUserNumber, userOperator, secondUserNumber));