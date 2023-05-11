const fibonacci = function(n) {
  if ( n < 0 ) return 'OOPS'
  // first two numbers are hardcoded
  let sequence = [1,1];
  // generate fibonacci sequence up to (n)th number
  for ( i = 2; i < n; i++){
    sequence.push( sequence[i-2] + sequence[i-1] )
  }
  // return (n)th number
  return sequence[ n - 1 ]
};

// Do not edit below this line
module.exports = fibonacci;
