const display = document.querySelector('#display');

// let resultHistory = [];
let storeNumber = [];
let storeOperator;

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

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    };
};

// // Operate function. Takes an operator and two numbers then takes one of the above functions. Executed when user clicks the equal sign.
// function operate(num1, num2, operator) {
//     if (operator == '+' && storeNumber.length == 2) {
//     let num = add(num1, num2);
//     resultHistory.push(...storeNumber);
//     storeNumber = [];
//     storeNumber.push(num);
    
// } else if (operator == '-' && storeNumber.length == 2) {
//     let num = subtract(num1, num2);
//     resultHistory.push(...storeNumber);
//     storeNumber = [];
//     storeNumber.push(num);
    
// } else if (operator == '*' && storeNumber.length == 2) {
//     let num = multiply(num1, num2);
//     resultHistory.push(...storeNumber);
//     storeNumber = [];
//     storeNumber.push(num);
    
// } else if (operator == '/' && storeNumber.length == 2) {
//     let num = divide(num1, num2);
//     resultHistory.push(...storeNumber);
//     storeNumber = [];
//     storeNumber.push(num);
// }
// console.log(resultHistory)
// console.log(storeNumber)
// display.textContent = storeNumber;
// }

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
    };

    // If equal is fired, store the inputted value in the storeNumber array and clear the value array for a next input. If storeNumber is empty do nothing.
    const buttonEquals = document.querySelector('.button__equals');
    buttonEquals.addEventListener('click', () => {
        if (storeNumber.length === 0) {
            return;
        } else if (value) {
            storeNumber.push(value);
            value = '';
            console.log(storeNumber);
        };
    });
    
    // If operator is fired, store the inputted value in the storeNumber array and clear the value array for a next input.
    const buttonOperator = document.querySelectorAll('.button__operator');
    for (let i = 0; i < buttonOperator.length; i++) {
        buttonOperator[i].addEventListener('click', function(e) {
                if (value) {
                    storeNumber.push(value);
                    value = '';
                    console.log(storeNumber);    
                }
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
        });
    };
};

// Equals oparation. Display the result of equation.
function equals() {
    const buttonEquals = document.querySelector('.button__equals');
    buttonEquals.addEventListener('click', () => {
        if (storeNumber.length >= 2) {
            const calculate = operate(storeOperator, parseInt(storeNumber[0]), parseInt(storeNumber[1]));
            display.textContent = calculate;
            storeNumber = [];
        }
    });
};

inputNumber(); 
inputOperator();
equals();
