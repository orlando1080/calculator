function Calculator() {
	this.num1 = null;
  	this.op = null;
  	this.num2 = null;
	this.opCount = 0;
  
	this.add = function () {
		const num3 = this.num1;
		if (this.num2 !== this.num2) {
			return this.num1 + num3;
		} 
		return this.num1 + this.num2;
  };
  
	this.subtract = function () {
		const num3 = this.num1;
		if (this.num2 !== this.num2) {
			return this.num1 - num3;
		} 
    	return this.num1 - this.num2;
  };
  
	this.multiply = function () {
		const num3 = this.num1;
		if (this.num2 !== this.num2) {
			return this.num1 * num3;
		} 
    	return this.num1 * this.num2;
  };
  
	this.divide = function () {
		const num3 = this.num1;
		if (this.num2 === 0) {
			return 'WTF!';
		}
		if (this.num2 !== this.num2) {
			return this.num1 / num3;
		} 
		return this.num1 / this.num2;
  };
  
	this.operate = function () {
    switch (this.op) {
      case '+':
        return this.add();
      case '-':
        return this.subtract();
      case 'x':
        return this.multiply();
      case '/':
        return this.divide();
    }
  };
	
	this.getCurrentDisplay = function (value) {
		this.numbers = value.split(this.op);
		this.num1 = +this.numbers[0];
		this.num2 = +this.numbers[1];
	};
	
	this.getCurrentOperator = function (value) {
		this.op = value;
	};
  
	this.displayNumbers = function () {
    	const numberButtons = document.querySelectorAll('.numbers');
    	numberButtons.forEach((numberButton) => {
      		numberButton.addEventListener('click', () => {
        		let currentDisplayValue = document.getElementById('display').textContent += numberButton.textContent;
				cal.getCurrentDisplay(currentDisplayValue);
      		});
    	});
  	};
	
	this.displayOperator = function () {
		const operatorButtons = document.querySelectorAll('#operator-buttons');
		operatorButtons.forEach((operatorButton) => {
			operatorButton.addEventListener('click', () => {
				document.getElementById('display').textContent += operatorButton.textContent;
				cal.opCount += 1;
				if (cal.opCount == 2) {
					document.getElementById('display').textContent = cal.operate().toString() + operatorButton.textContent;
					cal.opCount = 1;
				}
				cal.getCurrentOperator(operatorButton.textContent);
			});
		});
	};
	
	this.equals = function () {
		const equalsButton = document.querySelector('#equals-button');
		equalsButton.addEventListener('click', () => {
			this.opCount = 0;
			const result = cal.operate()
			if (result === undefined) {
				document.getElementById('display').textContent;
			} else if (result.toString().length > 8) {
				document.getElementById('display').textContent = result.toFixed(8);
			} else if (cal.num2 === null) {
				document.getElementById('display').textContent = cal.num1.toFixed(8);
			} else {
				document.getElementById('display').textContent = result;
			}
		});
	};

	this.clearDisplayValue = function () {
		const clearButton = document.querySelector('#clear-button');
		clearButton.addEventListener('click', () => {
			document.getElementById('display').textContent = null;
			cal.num1 = null;
			cal.op = null;
			cal.num2 = null;
			cal.opCount = 0;
		});
	};
}

const cal = new Calculator();

cal.displayNumbers();
cal.displayOperator();
cal.equals();
cal.clearDisplayValue();
