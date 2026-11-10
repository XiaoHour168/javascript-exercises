const repeatString = function(string, num) {
  if(num < 0){
    return "ERROR";
  }
  let result = "";
  for(let i = 0; i < num; i++){
    result += string;
  }
  return result;
};
console.log(repeatString("hey", 3));
// heyheyhey

console.log(repeatString("Hello", 2));
// HelloHello

console.log(repeatString("Hi", 0));
// ""

console.log(repeatString("hey", -1));
// ERROR
// Do not edit below this line
module.exports = repeatString;
