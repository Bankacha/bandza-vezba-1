const calculator = require('./lib/calculator');

console.log(calculator.add(2, 1) === 3 ? 'add works.' : 'add does not work.');
console.log(calculator.subtract(2, 1) === 1 ? 'subtract works.' : 'subtract does not work.');
console.log(calculator.divide(10, 2) === 5 ? 'divide works.' : 'divide does not work.');
console.log(calculator.multiply(2, 2) === 4 ? 'multiply works.' : 'multiply does not work.');
console.log(calculator.squareRoot(16) === 4 ? 'squareRoot works.' : 'Warning! squareRoot does not work. Check your method.');
console.log(calculator.exponent(4, 2) === 16 ? 'exponent works.' : 'Warning! exponent does not work. Check your method.');
