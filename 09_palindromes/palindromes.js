const palindromes = function (string) {
  //format to lower case, no space and no punctuation
  const formatted = string
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  const reversed = formatted
    .split('')
    .reverse()
    .join('')

  return formatted === reversed;
};

// Do not edit below this line
module.exports = palindromes;
