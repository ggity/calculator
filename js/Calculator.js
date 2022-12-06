class Calculator {
    constructor(previousOperandDomElement, currentOperandDomElement) {
        this.previousOperandDomElement = previousOperandDomElement;
        this.currentOperandDomElement = currentOperandDomElement;
        this.clearAll();
    }

    clearAll() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) {
            return
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "" || this.operation != null) {
            return
        }
        this.operation = operation;
        this.previousOperand = `${this.currentOperand}`;
        this.currentOperand = "";
    }

    compute() {
        if (this.currentOperand === "" || this.operation === undefined) {
            return;
        }
        let previuosNumber = parseFloat(this.previousOperand);
        let currentNumber = parseFloat(this.currentOperand);
        let result;
        switch (this.operation) {
            case "+":
                result = previuosNumber + currentNumber;
                break;
            case "-":
                result = previuosNumber - currentNumber;
                break;
            case "*":
                result = previuosNumber * currentNumber;
                break;
            case "÷":
                result = previuosNumber / currentNumber
                break;
        }
        this.currentOperand = result.toString();
        this.previousOperand = "";
        this.operation = undefined;

    }

    updateDisplay() {
        this.currentOperandDomElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandDomElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandDomElement.innerText = "";
        }
    }
}

export default Calculator;