const fibonacci = function(n) {
  if ( n < 0 ) return 'OOPS'
  
  // generate fibonacci sequence up to (n)th number
  let sequence = [1,1];
  for ( i = 1; i < n; i++){
    sequence.push( sequence[i-1] + sequence[i] )
  }
  // return (n)th number
  return sequence[ n - 1 ]
};

// Do not edit below this line
module.exports = fibonacci;
