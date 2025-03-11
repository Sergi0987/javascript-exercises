const convertToFahrenheit = function(temp) {
  let conversion = ((9/5 * temp) + 32).toFixed(1);
  return parseFloat(conversion);
};

const convertToCelsius = function(temp) {
  let conversion = (5/9 * (temp - 32)).toFixed(1);
  return parseFloat(conversion);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
