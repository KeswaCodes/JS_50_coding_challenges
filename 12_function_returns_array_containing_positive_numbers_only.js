// function that returns a positive array given an array as an argument

function returnPositiveArray(arr) {
  //loop through array
  for (number of arr) {
    if (number > 0) {
      // add positive number to the end of the array list
      positiveArray.push(number);
    } else {
      continue;
    }
  }

  return positiveArray;
}

let numbers = [3, -7, 12, -5, 0, 9, -2, 4];
// declare variable to carry the positive values
let positiveArray = [];
let result = returnPositiveArray(numbers);
console.log(result);
