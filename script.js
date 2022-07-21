// Math operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

// Operate function. Takes an operator and two numbers then takes one of the above functions. Executed when user clicks the equal sign.

function operate(num1, num2, operator) {
    if (operator == 'add') {
        return add(num1, num2);
    } else if (operator == 'subtract') {
        return subtract(num1, num2);
    } else if (operator == 'multiply') {
        return multiply(num1, num2)
    } else if (operator == 'divide') {
        return divide(num1, num2)
    } else console.log('ERR')
}

// Number input listener function.

function inputNumber() {
    let value = [];
    const buttonDigit = document.querySelectorAll('.button__digit');
    for (let i = 0; i < buttonDigit.length; i++) {
        buttonDigit[i].addEventListener('click', function(e) {
            value.push(e.target.innerHTML);
            console.log(value);
        });
    }
}

// Operator input listener function.

function inputOperator() {
    let operator = 0;
    const buttonOperator = document.querySelectorAll('.button__operator');
    for (let i = 0; i < buttonOperator.length; i++) {
        buttonOperator[i].addEventListener('click', function(e) {
            operator = e.target.innerHTML;
            console.log(operator);
        });
    }
}

inputNumber();
inputOperator();
