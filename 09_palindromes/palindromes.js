const palindromes = function (string) {
  // format to lower case, no space and no punctuation
  let formatted = string.toLowerCase()
    .replace(/[!@#$%^&*()_+., ]/g, '');

  let reversed = formatted.split('')
    .reverse()
    .join('')

  return formatted === reversed;
};

// Do not edit below this line
module.exports = palindromes;
