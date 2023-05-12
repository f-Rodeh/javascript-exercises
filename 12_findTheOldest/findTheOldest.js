const findTheOldest = function(array) {

  return array.reduce(( prev , current ) => {
    return ( getAge(current) > getAge(prev) ) ? current  : prev ;
  });

};

function getAge(person){
  let now =  new Date( Date.now() );
  return person.yearOfDeath - person.yearOfBirth
    || now.getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;