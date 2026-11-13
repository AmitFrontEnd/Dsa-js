const characterReplacement = (s, k) => {
  let i = 0, j = 0, maxLength = 0, map = {};
  map[s[i]] = 1
  while (j < s.length) {
    if (validate(map, k)) {
      maxLength = Math.max(maxLength, j - i + 1);
      j++
      if (j < s.length)
        map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]]
    } else {
      map[s[i]]--
      i++
    }
  }
  return maxLength
}
function validate(map, k) {
  let arr = Object.values(map)
  let maxElem = Math.max(...arr)
  let totalElements = arr.reduce((acc, elem) => acc + elem, 0)
  return totalElements - maxElem <= k
}

console.log(characterReplacement("AABABBA",0))