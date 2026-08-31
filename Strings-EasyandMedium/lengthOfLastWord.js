// * Using two loops
const getLastWordLength = (str) => {
  let n = str.length - 1, length = 0
  while (n >= 0) {
    if (str[n] === ' ') n--
    else break
  }
  for (let i = n; i >= 0; i--) {
    if (str[i] === ' ') break
    length++
  }
  return length
}


let str = "   fly me   to   the moon  "
console.log(getLastWordLength(str))