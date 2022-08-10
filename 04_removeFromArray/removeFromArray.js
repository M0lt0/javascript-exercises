const removeFromArray = function (arr, ...items) {
  arr = arr.filter((item) => {
    item.indexOf(items) === -1;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
