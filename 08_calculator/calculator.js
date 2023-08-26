const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((accum, num) => accum + num, 0);
};

const multiply = function(...nums) {
  return nums.reduce((prod, num) => prod * num, 1);
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(n) {
  // base case: if num is 0, return 1
	if (n === 0) return 1;

  // recursive step: multiply num by factorial of num - 1
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
