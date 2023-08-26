const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * 5 / 9;
  // round to 1 decimal point if necessary
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = tempCelsius * 9 / 5 + 32;
  // round to 1 decimal point if necessary
  tempFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
