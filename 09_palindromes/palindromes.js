const palindromes = function (word) {
  let regex = /[^A-Za-z0-9]/g;
  let lowRegWord = word.toLowerCase().replace(regex, "");
  let rev = lowRegWord.split("").reverse().join("");
  return lowRegWord === rev;
};

// Do not edit below this line
module.exports = palindromes;
