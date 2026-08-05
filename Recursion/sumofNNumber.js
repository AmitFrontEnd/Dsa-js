const getSum = n => {
  if (n == 1) return 1
  return n + getSum(n - 1)

}

console.log(getSum(10000))