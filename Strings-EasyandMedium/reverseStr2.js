
const reverseHelper = (arr, index, k) => {
  let left = index, right = k
  while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
}

const reverseStr = (s, k) => {
  let arr = s.split("")
  for (let i = 0; i < s.length; i += 2 * k) {
    reverseHelper(arr, i, Math.min(i + k - 1, arr.length - 1))
  }
  return arr.join("")
};

console.log(reverseStr("abcdef",3))