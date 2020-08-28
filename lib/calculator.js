function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

// TODO: Implement functions that returns square root and exponent
function squareRoot(number) {
    return Math.sqrt(number);
}

function exponent(base, exponent) {
    return Math.pow(base, exponent);
}

module.exports = { add, subtract, multiply, divide, squareRoot, exponent }
