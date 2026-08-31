// * Using two loops
// const getLastWordLength = (str) => {
//   let n = str.length - 1, length = 0
//   while (n >= 0) {
//     if (str[n] === ' ') n--
//     else break
//   }
//   for (let i = n; i >= 0; i--) {
//     if (str[i] === ' ') break
//     length++
//   }
//   return length
// }

// * Using one loop 
const getLastWordLength = (str) => {
  let length = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " && length === 0) continue
    else if (str[i] !== ' ') length++
    else break
  }
  return length
}
let str = "   fly me   to   the moon  "
console.log(getLastWordLength(str))