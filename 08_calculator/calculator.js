const add = function(...numbers) {
  return numbers.reduce(( total, current ) => {
    return total + current
  }, 0 )
};

const subtract = function( num1, num2 ) {
  return num1 - num2;
};

const sum = function(array) {
	return array.reduce(( total, current ) => {
    return total + current
  }, 0)
};

const multiply = function(array) {
  return array.reduce(( total, current ) => {
    return total * current;
  }, 1)
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	let result = 1;
  for ( let i = 1; i <= num; i++ ) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
