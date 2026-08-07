const getFactorial = num => {
  if (num == 1) return 1;
  return num * getFactorial(num - 1)
}

console.log(getFactorial(6))