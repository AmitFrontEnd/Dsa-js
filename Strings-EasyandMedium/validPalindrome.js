
const isPalindromeBrute = s => {
  let alphaRegex = /[a-zA-Z0-9]/
  let alphaString = ""
  for (let char of s) {
    if (alphaRegex.test(char))
      alphaString += char.toLowerCase()
  }

  let reverseAlphaStringArray = alphaString.split("")
  let left = 0, right = reverseAlphaStringArray.length - 1
  while (left < right) {
    let temp = reverseAlphaStringArray[left]
    reverseAlphaStringArray[left] = reverseAlphaStringArray[right]
    reverseAlphaStringArray[right] = temp
    left++
    right--
  }

  if (alphaString === reverseAlphaStringArray.join("")) return true
  return false
};


const isPalindromeOptimal = s => {
  let alphaRegex = /[a-zA-Z0-9]/
  s = s.toLowerCase()
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (!alphaRegex.test(s[left])) {
      left++
      continue
    }
    if (!alphaRegex.test(s[right])) {
      right--
      continue
    }
    if (s[left] !== s[right]) return false
    left++
    right--
  }
  return true
};
console.log(isPalindromeOptimal("race a car"))