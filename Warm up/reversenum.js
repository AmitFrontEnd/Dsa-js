const reverseNum = num => {
  isNegative = num > 0 ? false : true
  num = Math.abs(num)
  let reverse = 0
  while (num > 0) {
    let rem = num % 10
    reverse = (reverse * 10) + rem
    num = Math.floor(num / 10)
  }
  let limit = Math.pow(2, 31)
  if (reverse > limit - 1 || reverse < -limit) return 0
  return isNegative ? -reverse : reverse
}
console.log(reverseNum(-121))
console.log(reverseNum(-7348))
console.log(reverseNum(7474))

