let i = 1;

while (i <= 10) {
  for (let j = 1; j <= 10; j++) {
    let product = i * j;
    let sentence = `${i} x ${j} = ${product}`;
    console.log(sentence);
  }
  i++;
}
