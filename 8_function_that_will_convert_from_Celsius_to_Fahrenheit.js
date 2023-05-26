function convertToFahren(celsius) {
  fahren = (celsius * 9) / 5 + 32;
  //round off value to it's nearest integer
  let roundedValue = Math.round(fahren);
  return roundedValue;
}
// call the function
let conversion = convertToFahren(32);
console.log(conversion);
