// const getArraySum = (num, arr) => {
//   if (num >= arr.length) return 0;
//   return arr[num] + getArraySum(num + 1, arr)
// }

// const arr = [2, 4, 5, 8]

// * Odd problem also done
const getArraySumOdd = (num, arr) => {
  if (num >= arr.length) return 0;
  return arr[num] % 2 !== 0 ? arr[num] + getArraySumOdd(num + 1, arr) : getArraySumOdd(num + 1, arr)
}

const arr = [4, 3, 5, 6]
console.log(getArraySumOdd(0, arr))