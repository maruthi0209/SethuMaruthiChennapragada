function countMult(arr) {
  const res = {};
  for (let i = 1; i <= 9; i++) {
    res[i] = 0;
  }
 
  arr.forEach(element => {
    for (let j = 1; j <= 9; j++) {
      if (element % j === 0) {
        res[j]++;
      }
    }
  });

  return res;
}


const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMult(arr));
