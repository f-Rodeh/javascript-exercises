const add = function() {
	let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result;
};

const subtract = function( num1, num2 ) {
  return num1 - num2;
};

const sum = function(array) {
	let result = 0;
  for (const num of array){
    result += num;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for (const num of array){
    result *= num;
  }
  return result;
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
