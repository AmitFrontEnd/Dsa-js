const getMaxConsecutiveOnes = arr => {
  let maxCount = 0;
  let count = 0
  for (const elem of arr) {
    if (elem === 1) {
      count++
      maxCount = Math.max(maxCount, count)
    }
    else
      count = 0;
  }
  return maxCount
}

console.log(getMaxConsecutiveOnes([0, 1, 1, 0, 0, 1, 1, 0, 1, 1]))