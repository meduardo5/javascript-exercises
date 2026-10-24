const convertToCelsius = function(degrees) {
  return Math.round((degrees - 32) / 1.8 * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  return Math.round((degrees * 1.8) + 32 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
