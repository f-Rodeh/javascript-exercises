const leapYears = function(year) {
  if( year % 4 === 0  &&  year % 100 !== 0 ){
    return true;
  } else if ( year % 100 === 0  &&  year % 400 === 0 ){
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;

// Leap years are divisible by 4 but not 100 unless it's also 400:

// If it's divisible by 4 and not 100 it's leap
// If it's divisible by 100 and 400 it's leap
// else is not leap
