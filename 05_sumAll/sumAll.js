const sumAll = function( num1, num2 ) {

  if(  typeof num1 != 'number' 
    || typeof num2 != 'number'
    || num1 < 0
    || num2 < 0){ 
    return 'ERROR'
  }

  let result = 0;
  let smallest = Math.min(num1, num2)
  let biggest = Math.max(num1, num2)
  
  for ( let i = smallest; i <= biggest; i++ ){
    result += i;
  }

  return result
};

// Do not edit below this line
module.exports = sumAll;

//the function takes 2 integers
//initialize a loop from the smallest (first) number
//loop until i is bigger than the biggest (last) number
  //inside the loop add i to a variable with an empty number
