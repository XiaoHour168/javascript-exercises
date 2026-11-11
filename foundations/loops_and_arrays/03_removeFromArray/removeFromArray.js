const removeFromArray = function(array, ...args) {
  return array.filter(number => !args.includes(number));
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// [1, 2, 4]

console.log(removeFromArray([1, 2, 3, 4], 2, 4));
// [1, 3]

console.log(removeFromArray([1, 2, 3, 4]));
// [1, 2, 3, 4]

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
// []

// Do not edit below this line
module.exports = removeFromArray;
