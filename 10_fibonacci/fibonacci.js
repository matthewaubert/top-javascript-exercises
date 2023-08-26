const fibonacci = function(n) {
  if (n < 0) return 'OOPS'; // if n is negative, return 'OOPS'
  const fibNums = [0, 1]; // initialize fibNums to [0, 1]
  for (let i = 1; i < n; i++) { // iterate from 2 to n
    // push to fibNums: sum of fibNums at i and fibNums at i - 1
    fibNums.push(fibNums[i] + fibNums[i - 1]);
  }
  return fibNums[n]; // return fibNums at index of n
};

// n = 4
// i = 4
// [0, 1, 1, 2, 3]

// Do not edit below this line
module.exports = fibonacci;
