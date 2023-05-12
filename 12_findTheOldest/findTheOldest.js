const findTheOldest = function(array) {
    
  let now =  new Date( Date.now() );

  return array.reduce(( prev , current ) => {
    
    let prevAge = prev.yearOfDeath - prev.yearOfBirth 
      || now.getFullYear() - prev.yearOfBirth;

    let currentAge = current.yearOfDeath - current.yearOfBirth
      || now.getFullYear() - current.yearOfBirth;
      
    return ( currentAge > prevAge ) ? current  : prev ;
  });

};

// Do not edit below this line
module.exports = findTheOldest;

// reduce the array with a function
// check between two  s who is the oldest and 
// return the index of the oldest for the next iteration
// the final result should be the oldest   in the array

// to find the age, year of death - year of birth