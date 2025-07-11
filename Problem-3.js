function generateOddSer(a) {
  if (typeof a !== 'number' || !Number.isInteger(a) || a < 1) {
    return "a must be a positive integer";
  }
  const lastNum = a % 2 === 0 ? a - 1 : a;
  let ser = [];
  for (let i = 1; i <= lastNum; i += 2) {
    ser.push(i);
  }
  return ser.join(', ');
}

console.log(generateOddSer(1));  
console.log(generateOddSer(2));  
console.log(generateOddSer(3));  
console.log(generateOddSer(4));  
console.log(generateOddSer(5));  
console.log(generateOddSer(6));  