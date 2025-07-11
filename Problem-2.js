function generateSeries(a) {
  if (typeof a !== 'number' || !Number.isInteger(a) || a < 1) {
    return "a must be a positive integer";
  }
  let ser = [];
  let curNum = 1;

  for (let i = 0; i < a; i++) {
    ser.push(curNum);
    curNum += 2;
  }
  return ser.join(', ');
}

console.log(generateSeries(1)); 
console.log(generateSeries(3)); 
console.log(generateSeries(4)); 
console.log(generateSeries(2)); 