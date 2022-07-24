const display = document.querySelector('#display');
let storeNumber = [];
let storeOperator = 0;

// Math operators
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a)/Number(b);
}

// Operate function. Takes an operator and two numbers then takes one of the above functions. Executed when user clicks the equal sign.
function operate(num1, num2, operator) {
    if (operator == '+') {
    let num = add(num1, num2);

    } else if (operator == '-') {
        let num = subtract(num1, num2);

    } else if (operator == '*') {
        let num = multiply(num1, num2);

    } else if (operator == '/') {
        let num = divide(num1, num2);

    }
}

// Number input listener function. Take digits, store them and display.
function inputNumber() {
    let value = '';
    const buttonDigit = document.querySelectorAll('.button__digit');
    for (let i = 0; i < buttonDigit.length; i++) {
        buttonDigit[i].addEventListener('click', function(e) {
            value += e.target.innerHTML;
            display.textContent = value;
            console.log(value);
        });
    }
    
    // If operator is fired, store the inputted value in the storeNumber array and clear the value array for a next input.
    const buttonOperator = document.querySelectorAll('.button__operator');
    for (let i = 0; i < buttonOperator.length; i++) {
        buttonOperator[i].addEventListener('click', function(e) {
            storeNumber.push(value);
            value = '';
            console.log(storeNumber);
    });
};
};

// Operator input listener function.
function inputOperator() {
    let operator = 0;
    const buttonOperator = document.querySelectorAll('.button__operator');
    for (let i = 0; i < buttonOperator.length; i++) {
        buttonOperator[i].addEventListener('click', function(e) {
            operator = e.target.innerHTML;
            console.log(operator);
            storeOperator = operator;
            operate(storeNumber[0], storeNumber[1], storeOperator);
        });
    }
}

inputNumber(); 
inputOperator();