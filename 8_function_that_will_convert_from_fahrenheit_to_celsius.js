function convertToCelsius(fahrenheit) {
  celsius = ((fahrenheit - 32) * 5) / 9;
  //round off the value to it's nearest integer
  roundedValue = Math.round(celsius);
  return roundedValue;
}
let conversion = convertToCelsius(72);
console.log(conversion);
