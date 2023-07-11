function Calculator() {
	this.num1 = null;
  this.op = '';
  this.num2 = null;
  
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
  
	this.operate = function () {
    switch (this.op) {
      case '+':
        console.log(this.add());
      case '-':
        return this.subtract();
      case '*':
        return this.multiply();
      case '/':
        return this.divide();
    }
  };
	
	this.getCurrentDisplay = function (value) {
		const numbers = value.split(this.op);
		this.num1 = +numbers[0];
		this.num2 = +numbers[1];
		console.log(this.num1);
		console.log(this.num2);
	};
	
	this.getCurrentOperator = function (value) {
		this.op = value;
		console.log(this.op);
	};
  
	this.displayNumbers = function () {
    	const btns = document.querySelectorAll('.numbers');
    	btns.forEach((btn) => {
      		btn.addEventListener('click', () => {
        		let currentDisplayValue = document.getElementById("display").textContent += btn.textContent;
				cal.getCurrentDisplay(currentDisplayValue);
      		});
    	});
  	};
	
	this.displayOperator = function () {
		const operatorButtons = document.querySelectorAll('#operator-buttons');
		operatorButtons.forEach((operatorButton) => {
			operatorButton.addEventListener('click', () => {
				
				let currentDisplayValue = document.getElementById("display").textContent += operatorButton.textContent;
				cal.getCurrentOperator(operatorButton.textContent);
			});
		});
	};
	this.equals = function () {
		const equalsButton = document.querySelector('#equals-button');
		console.log(equalsButton);
		equalsButton.addEventListener('click', () => {
			cal.operate();
		});
	};
}

const cal = new Calculator();

cal.displayNumbers();
cal.displayOperator();
cal.equals();
