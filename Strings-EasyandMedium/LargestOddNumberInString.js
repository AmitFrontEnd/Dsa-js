//* Create problem for large numbers
const largestOddNumberBrute = num => {
  let arr = []
  for (let i = 0; i < num.length; i++) {
    let subStr = ""
    for (let j = i; j < num.length; j++) {
      subStr += num[j]
      arr.push(subStr)
    }
  }

  arr = arr.filter(num => num % 2 !== 0).map(num => Number(num))
  return arr.length ? Math.max(...arr).toString() : ''
}

const largestOddNumberOptimal = num => {
  let oddStr = "", right = num.length - 1
  while (right >= 0) {
    if (num[right] % 2 === 0) {
      right--
      continue
    }
    break;
  }
  for (let i = 0; i <= right; i++) {
    oddStr += num[i]
  }
  return oddStr
};

console.log(largestOddNumberOptimal("52"))