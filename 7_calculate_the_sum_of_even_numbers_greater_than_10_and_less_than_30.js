//initialize the variable adding numbers from 12 to 28
let sumOfEven = 0;

// Loop through numbers greater than 10 & less than 30
for (let count = 12; count < 30; count++) {
  if (count % 2 === 0) {
    sumOfEven += count;
  } else {
    continue;
  }
}
console.log(sumOfEven);
