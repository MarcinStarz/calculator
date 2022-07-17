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

// Operate function. Takes an operator and two numbers then takes one of the above functions. Executed when user click equal sign.

function operate(num1, num2, operator) {
    if (operator == true) {
        return add(num1, num2);
    } else if (operator == true) {
        return subtract(num1, num2);
    } else if (operator == true) {
        return multiply(num1, num2)
    } else if (operator == true) {
        return divide(num1, num2)
    } else console.log('ERR')
}