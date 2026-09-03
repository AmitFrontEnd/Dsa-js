const getMaxBalanceSubstring = s => {
  let count = 0, length = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') count++
    else count--
    if (count === 0) {
      length++
    }
  }
  return length;
}

console.log(getMaxBalanceSubstring("RLRRRLLRLL"))