const display = document.querySelector('#display');

let resultHistory = [];
let storeNumber = [];
let storeOperator;

// Math operators
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a/b;
};

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

// Number input listener function. Take digits, store them and display.
function inputNumber() {
    let value = '';
    const buttonDigit = document.querySelectorAll('.button__digit');
    for (let i = 0; i < buttonDigit.length; i++) {
        buttonDigit[i].addEventListener('click', function(e) {
            if (value.length >= 7) return;
            value += e.target.innerHTML;
            display.textContent = value;
            console.log(value);
        });
    };
    const decimalButton = document.querySelector('.button__decimal');
    decimalButton.addEventListener('click', (e) => {
        if (value.includes('.')) return;
        value += e.target.innerHTML;
        display.textContent = value;
    });

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
                    pushIndex();
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
                evaluatePair();
                operator = e.target.innerHTML;
                console.log(operator);
                storeOperator = operator;
                falseOperator();
            });
        };
    };
    
    function evaluatePair() {
        if (storeNumber.length === 2) {
            let result = operate(storeOperator, parseFloat(storeNumber[0]), parseFloat(storeNumber[1]));
            divideByZero(result);
            if (typeof result == 'number' && result != Infinity) {
                resultHistory.push(...storeNumber);
                console.log(resultHistory);
                storeNumber = [];
                storeNumber.push(result);
                display.textContent = result;
                console.log(typeof result);
            };
        };
    };
    
    // Equals oparation. Display the result of equation.
    function equals() {
        const buttonEquals = document.querySelector('.button__equals');
        buttonEquals.addEventListener('click', () => {
            if (storeNumber.length >= 2) {
                let calculate = operate(storeOperator, parseFloat(storeNumber[0]), parseFloat(storeNumber[1]));
                divideByZero(calculate);
                if (typeof calculate == 'number' && calculate != Infinity) {
                    display.textContent = calculate;
                    console.log(calculate);
                    resultHistory.push(...storeNumber);
                    storeNumber = [];
                    storeNumber.push(calculate);
                }
                storeOperator = false;
        };
    });
};

// Clear calculator.
function clear() {
    const clearButton = document.querySelector('.button__clear');
    clearButton.addEventListener('click', () => window.location.reload());
};

//Fix decimal if float is longer than 7.
function floatFix(num) { {
        return parseFloat(num.toFixed(7));
    };
};

//When user omits operator and proceeds to typing number after equation, push first index to resultHistory.
function pushIndex() {
    if (storeOperator === false) {
        const remove = storeNumber.shift();
        resultHistory.push(remove);
        console.log(resultHistory);
    };
};

// After equation if there's no next operator, move the calculation result to resultHistory.
function falseOperator() {
    if (storeOperator === false) {
        const remove = storeNumber.shift();
        resultHistory.push(remove);
        console.log(resultHistory);
    };
};

function divideByZero(a) {
    if (a == Infinity) {
        display.textContent = "NANANA"
        storeNumber = [];
        storeOperator = false;
    };
};

inputNumber(); 
inputOperator();
equals();
clear();