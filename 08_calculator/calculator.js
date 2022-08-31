const add = function (i, j) {
  return i + j;
};

const subtract = function (i, j) {
  return i - j;
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  let total = arr.reduce((i, j) => {
    return i * j;
  });
  return total;
};

const power = function (n, p) {
  let power = Math.pow(n, p);
  return power;
};

const factorial = function (number) {
  let start = 1;
  if (number < 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
  return start;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
