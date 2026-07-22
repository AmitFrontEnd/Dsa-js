
// const isPalindrome = num => {
//   let original = num
//   let str = ''
//   while (num > 0) {
//     let rem = null
//     rem = num % 10
//     str += rem
//     num = Math.floor(num / 10)
//   }
//   return original === +str
// }


const isPalindrome2 = num => {
  if (num < 0) return false
  let original = num
  let reverse = 0
  while (num > 0) {
    let rem = num % 10
    reverse = (reverse * 10) + rem
    num = Math.floor(num / 10)
  }
  return original === reverse
}

console.log(isPalindrome2(121))
console.log(isPalindrome2(-32438))