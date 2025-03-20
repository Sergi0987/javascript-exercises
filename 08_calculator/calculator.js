const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  if(arr.length > 0){
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
  } else {
    return 0;
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 0;
  if(arr.length > 0){
    sum = arr[0];
    for(let i = 1; i < arr.length; i++){
      sum *= arr[i];
    }
  } else {
    return 0;
  }
  return sum;
};

const power = function(num1, num2) {
  let sum = 1;
  for(let i = 0; i < num2; i++){
    sum *= num1;
  }
  return sum;
};

const factorial = function(num) {
  let sum = 1;
  if(num === 0){
    return sum;
  } else {
    for(let i = num; i > 0; i--){
      sum *= i;
    }
  }
  return sum;
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
