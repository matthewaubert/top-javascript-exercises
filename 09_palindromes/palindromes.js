const palindromes = function (string) {
  // special chars
  const special = ".,:;?! ";
  // iterate through chars in string from beginning and end
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    // while char is special char, skip
    while (special.includes(string[i])) i++;
    while (special.includes(string[j])) j--;
    // if char i is not same as char j, return false
    if (string[i].toLowerCase() !== string[j].toLowerCase()) return false;
  }
  return true; // if i < j return true
};

// Do not edit below this line
module.exports = palindromes;
