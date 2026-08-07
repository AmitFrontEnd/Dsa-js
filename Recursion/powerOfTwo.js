const isPowerOfTwo = num => {
  if (num == 1) return true
  if (num % 2 !== 0 || num < 2) return false
  return isPowerOfTwo(num / 2)
}

console.log(isPowerOfTwo(37333882))