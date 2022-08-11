const removeFromArray = function (...arg) {
  const array = arg[0];
  const newArr = [];
  array.forEach((elm) => {
    if (!arg.includes(elm)) {
      newArr.push(elm);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
