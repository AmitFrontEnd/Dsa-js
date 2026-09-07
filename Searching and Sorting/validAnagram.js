
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) map.set(s[i], 1)
    else map.set(s[i], map.get(s[i]) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) - 1)
  }

  for (let [key, value] of map) {
    if (value !== 0) return false
  }

  return true
};

console.log(isAnagram("anagram", "nagaram"))