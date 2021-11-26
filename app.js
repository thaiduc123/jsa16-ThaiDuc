function sum(...others) {
  let sum = 0;
  for (let x of others) {
    sum += x;
  }
  return sum;
}
