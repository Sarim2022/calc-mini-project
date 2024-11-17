
let displayValue = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

const display = document.querySelector('.display');

function appendToDisplay(value) {
    displayValue += value;
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
    display.textContent = '0';
}

function calculate() {
    if (displayValue.includes('+')) {
        [firstOperand, secondOperand] = displayValue.split('+');
        displayValue = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (displayValue.includes('-')) {
        [firstOperand, secondOperand] = displayValue.split('-');
        displayValue = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (displayValue.includes('*')) {
        [firstOperand, secondOperand] = displayValue.split('*');
        displayValue = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (displayValue.includes('/')) {
        [firstOperand, secondOperand] = displayValue.split('/');
        displayValue = parseFloat(firstOperand) / parseFloat(secondOperand);
    } else if (displayValue.includes('%')) {
        [firstOperand, secondOperand] = displayValue.split('%');
        displayValue = (parseFloat(firstOperand) / 100) * parseFloat(secondOperand);
    } else if (displayValue.includes('^')) {
        [firstOperand, secondOperand] = displayValue.split('^');
        displayValue = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
    } else if (displayValue.includes('!')) {
        firstOperand = displayValue.replace('!', '');
        displayValue = factorial(parseInt(firstOperand));
    }

    display.textContent = displayValue;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

